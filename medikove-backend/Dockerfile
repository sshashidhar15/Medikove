FROM node:16.14.2-buster as build
WORKDIR /medikove_backend

COPY package.json package.json
COPY package-lock.json package-lock.json 

RUN npm install
COPY . /medikove-backend

CMD ["npm","start"]