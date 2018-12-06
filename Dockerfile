FROM node:6.9.1

ARG environment=production

# Create app directory
RUN mkdir -p /flaconi-svc
WORKDIR /flaconi-svc

# Create Logs folder
RUN mkdir /flaconi-svc/logs

#dont install dev-dependencies if production
ENV NODE_ENV=${environment}

# Install app dependencies
COPY package.json /flaconi-svc/
RUN npm install
# Bundle app source
COPY . /flaconi-svc

# Change the time zone to UTC+1 Berlin
RUN ln -fs /usr/share/zoneinfo/Europe/Berlin /etc/localtime

EXPOSE 3000
CMD [ "npm", "start" ]
