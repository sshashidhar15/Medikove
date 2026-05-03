FROM node:16-alpine AS builder

WORKDIR /medikove

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /medikove/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]