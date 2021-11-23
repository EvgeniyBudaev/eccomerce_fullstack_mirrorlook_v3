# build env
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY . .
COPY .env .
RUN npm install
ENV NODE_ENV production
RUN npm run build
CMD cp -r build result_build
