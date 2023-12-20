FROM node:18.17.1

WORKDIR /usr/app/src

COPY package*.json ./

RUN npm install
COPY . .
CMD [ "npm","run","dev" ]