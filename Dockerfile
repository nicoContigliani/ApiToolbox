FROM node:14.17.1-alpine

WORKDIR ./bin

COPY package*.json ./

# RUN npm install -f

# RUN npm run start

# ENTRYPOINT ["docker-entrypoint.sh"]
COPY . . 


CMD [ "npm","start" ]