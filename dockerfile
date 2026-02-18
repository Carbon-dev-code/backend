#version de node
FROM node:20-alpine

#name du container
WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:dev"]