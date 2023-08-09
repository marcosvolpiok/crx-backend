FROM node:latest
#ENV POSTGRES_DB "nest"
RUN mkdir -p -v /usr/src/app
WORKDIR /usr/src/app
VOLUME /usr/src/app
RUN npm i -g @nestjs/cli
#COPY . /usr/src/app
COPY package*.json /usr/src/app/

COPY . /usr/src/app

RUN npm install

EXPOSE 3000
RUN cd /usr/src/app
CMD ["npm", "run", "start:dev"]