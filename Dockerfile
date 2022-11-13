# pull the base image
FROM node:16.14.2


# start app
CMD ["npm", "start"]
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000