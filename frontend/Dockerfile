# build env
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ENV REACT_APP_PROD_DOMAIN='http://62.84.119.86/'
RUN npm run build
CMD cp -r build result_build
