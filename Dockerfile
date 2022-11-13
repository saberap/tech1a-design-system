#Named the node staged as builder
FROM node:16.18.0-alpine AS builder
#Set working directory

WORKDIR /app
#Copy all files from current directory to working dir in image
COPY package*.json .

COPY . .
#Install node modules and build assets
RUN yarn install && yarn build-storybook
#Nginx state for serving content 
FROM nginx:alpine
#Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html/app
#Remove default nginx static assets
RUN rm -rf ./*
#Copy static assets from builder stage
COPY --from=builder /app/storybook-static .

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
# Containers run nginx with global directives and daemon off
CMD ["nginx","-g","daemon off;"]