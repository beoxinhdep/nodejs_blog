FROM node:18

#App directory
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]
