FROM node:20

WORKDIR /docker-prac

COPY package.json .

RUN npm install

COPY . /docker-prac

EXPOSE 3000

CMD ["npm", "start"]