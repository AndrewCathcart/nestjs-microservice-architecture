FROM node:12.16.1-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD ["npm", "run", "start:dev"]