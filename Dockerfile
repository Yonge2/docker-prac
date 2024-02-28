FROM node:20

WORKDIR /docker-prac

COPY package.json .

RUN npm install

COPY . /docker-prac

CMD ["npm", "start"]

EXPOSE 3000