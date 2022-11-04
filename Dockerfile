FROM node:16-alpine as builder

WORKDIR /medikove

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /medikove/build /usr/share/nginx/html

CMD ["nginx","-g", "daemon off;"]