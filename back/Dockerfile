FROM node:latest

WORKDIR /app/api

COPY package*.json ./

RUN npm install

COPY ./api/*.ts ./
COPY ./tsconfig.json ./

CMD ["npm", "run", "start"]
