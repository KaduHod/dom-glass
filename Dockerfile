FROM node:latest

RUN apt update

COPY . .

RUN npm i

CMD ["npm", "start"]