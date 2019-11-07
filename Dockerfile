FROM node:12.13.0-alpine

# This will be root folder for all further commands
WORKDIR /api-tests

# adding bash terminal
RUN apk add --no-cache bash

# Copy all content
COPY . .


RUN npm install
