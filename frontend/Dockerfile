# build env
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ENV NODE_ENV production
RUN npm run build
COPY [".env.production", "./build/"]
CMD cp -r build result_build
