FROM node:latest
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
# RUN npm install --silent
RUN npm install -g npm@7.23.0 --silent
CMD ["npm", "start"]