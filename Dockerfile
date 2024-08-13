FROM node:latest AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx AS production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]