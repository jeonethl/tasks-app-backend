FROM node:16.13-alpine as build 
# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json ./package-lock.json /app/

# Then install the NPM module
RUN yarn

# Copy current directory to APP folder
COPY . /app/

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start:prod"]

