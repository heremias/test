FROM node:18.4.0-alpine as builder
WORKDIR /app/test

RUN apk add --update alpine-sdk
COPY package.json .
RUN apk update && apk add python3-dev \
                          gcc \
                          libc-dev \
                          libffi-dev
RUN apk add --update git && rm -rf /tmp/* /var/cache/apk/*
RUN npm install -g gatsby-cli
# RUN npm init gatsby -ts

# RUN ls
RUN npm install
COPY test/ .
RUN npm run build
# RUN npx gatsby new gatsby-starter-drupal-homepage https://github.com/gatsbyjs/gatsby-starter-drupal-homepage

# copy the whole source folder(the dir is relative to the Dockerfile
# COPY . .

# CMD [ "npm", "run", "develop" ]


FROM nginx:alpine as runner
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/test/public .
# Containers run nginx with global directives and daemon off
EXPOSE 8080