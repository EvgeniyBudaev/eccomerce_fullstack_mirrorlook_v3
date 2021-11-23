FROM node:13.12.0-alpine as build
WORKDIR /app
ADD package.json package.json
RUN npm install
ADD . .
RUN npm run build
CMD cp -r build result_build
