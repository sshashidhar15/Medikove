# Medikove AI Agent Instructions

## Architecture Overview

**Medikove** is a full-stack healthcare/medical e-commerce platform with three main layers:

- **Frontend**: React 18 SPA with React Router v5 (ports 3000 dev / 3050 prod via Nginx)
- **Backend**: Node.js Express API with async Redis integration (port 8083)
- **Caching**: Redis Stack for session/data persistence on port 6379
- **Proxy**: Nginx reverse proxy in production (port 3050)

### Directory Structure
- `/src/` - React frontend application
- `/medikove-backend/` - Express backend API server
- `/nginx/` - Nginx configuration for production proxy
- `/docker-compose.yml` - Local development orchestration (frontend, backend, redis, nginx)
- `Dockerfile` / `Dockerfile.dev` - Production/development builds

## Frontend Patterns

**React Component Structure**: All components are in `/src/components/`. Use function components with hooks.

**State Management**: React hooks only (`useState`). No Redux—keep state local or prop-drill for shared state like cart (`count`, `number`, `Prod`). See [App.js](App.js#L33-L40) for cart state pattern.

**Routing**: React Router v5 with `<Switch>` and `<Route>` pattern (not v6). Main routes in [App.js](App.js#L61-L98):
- `/` - Home (Header, Main, Process, Clinic, Testimonial)
- `/gear` - Product listing/shopping
- `/expertise` - Doctor expertise/profiles
- `/doctorlogin` - Doctor authentication
- `/dashboard` - Doctor dashboard (stub)
- `/contactus` - Contact form

**Icons**: FontAwesome SVG icons and Bootstrap icons. Example: [Header.js](src/components/Header.js#L5-L8) uses `@fortawesome/react-fontawesome` and Bootstrap icons.

**Styling**: CSS Modules in `/src/components/css/` (e.g., Header.css, Main.css). No CSS-in-JS framework.

## Backend Patterns

**API Server**: Express running on port 8083. Minimal endpoints:
- `POST /login` - Auth token response (currently test token hardcoded)
- `GET /values` - Redis hash retrieval (see [server.js](medikove-backend/server.js#L22-L30))

**Redis Integration**: Async Redis client. Config pulled from environment variables (`REDIS_HOST`, `REDIS_PORT`). Pattern in [config.js](medikove-backend/config.js):
```javascript
module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT 
};
```

**CORS**: Enabled globally (see [server.js](medikove-backend/server.js#L8)).

## Development Workflow

**Local Development** (full stack):
```bash
# Start all services: React (3000), Express (8083), Redis (6379), Nginx (3050)
docker-compose up
```

**Frontend Development**:
```bash
npm install
npm start  # Runs on http://localhost:3000 with hot reload
npm test   # Jest with React Testing Library
npm run build  # Production build to /build folder
```

**Backend Development**:
```bash
cd medikove-backend
npm install
npm run dev  # Nodemon watch mode
npm start  # Production run
```

## Deployment & CI/CD

**Jenkins Pipeline** (see [Jenkinsfile](Jenkinsfile)):
1. Checkout code & capture commit ID
2. Build Docker image: `intellithing/medikove:${commit_id}`
3. Push to Docker Hub registry (credentials: 'intellithing')
4. Tests currently commented out - re-enable when test suite is defined

**Production Docker** (Dockerfile): 
- Multi-stage build: compiles React app → serves via Nginx + Express backend in separate containers

**Development Docker** (Dockerfile.dev):
- Single-stage: runs `npm start` with live reload via volume mounts

## Data & Integration Points

**Authentication Flow**: Frontend sends credentials to `/login` endpoint, receives token (see [App.js](App.js#L36)). Token stored in state but not persisted—needs localStorage/sessionStorage for real implementation.

**Product Data**: Doctor/gear data currently hardcoded in [doctordata.js](src/doctordata.js) and populated via component props. Real implementation should fetch from backend API.

**Cart State**: Managed in App.js state (`count`, `number`, `Prod`). See [Header.js](src/components/Header.js#L27) for cart badge counter display.

**Redis Usage**: Stores key-value pairs via `hgetall()` and `set()` methods. Currently minimal—used for session/cache layer but not deeply integrated.

## Key Files Reference

| File | Purpose |
|------|---------|
| [src/App.js](src/App.js) | Routes, auth state, cart state (entry point) |
| [medikove-backend/server.js](medikove-backend/server.js) | API endpoints, Redis client init |
| [src/components/Header.js](src/components/Header.js) | Navigation bar with cart badge |
| [docker-compose.yml](docker-compose.yml) | Local stack orchestration |
| [default.conf](default.conf) | Nginx routing configuration |

## Common Tasks

- **Add new route**: Add `<Route>` in App.js Switch, create component in `/src/components/`
- **Add backend endpoint**: Add `app.get()` or `app.post()` in server.js, call from frontend via fetch/async
- **Modify Docker setup**: Update `docker-compose.yml` services or individual Dockerfiles
- **Build for production**: Run `npm run build` in root (creates optimized React bundle) + Docker build with Dockerfile
