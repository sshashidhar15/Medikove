FROM node:16-alpine as builder

WORKDIR /medikove

COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm ci --production

COPY . .
RUN npm run build

FROM nginx:latest as prod
EXPOSE 3000

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /medikove/build /usr/share/nginx/html

CMD ["nginx","-g", "daemon off;"]
