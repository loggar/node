FROM node:latest

WORKDIR /apps/node-app-1

COPY . .

ENV PORT=3000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]