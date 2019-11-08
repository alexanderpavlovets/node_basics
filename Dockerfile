FROM node:12.13.0-alpine

# This will be root folder for all further commands
WORKDIR /tests-example

# adding bash terminal
RUN apk add --no-cache bash

# Copy all content, except .dockerignore
COPY . .

# Setting permissions to npm in order to run postinstall webdrivermanager script
RUN npm set unsafe-perm true

# Install dependencies
RUN npm install

# Run tests
# Turned off because no Chrome installed. Just for demo here.
# CMD ["npm", "test"]