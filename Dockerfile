FROM node:latest
#ENV POSTGRES_DB "nest"
RUN mkdir -p -v /usr/src/app
WORKDIR /usr/src/app
RUN npm i -g @nestjs/cli
COPY . /usr/src/app
RUN npm install
EXPOSE 3000
RUN cd /usr/src/app
CMD ["npm", "start"]