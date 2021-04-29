FROM node:10-alpine
# add support for Build tools
RUN apk add --no-cache git bash make gcc g++ python

ENV TZ=Asia/Saigon
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Private Registry
#RUN npm config set registry https://npm.vexere.net
RUN yarn config set registry https://npm.vexere.net

RUN yarn install

ENV NODE_ENV=production

# copy to build to dist folder
COPY . .

RUN yarn build

EXPOSE 8000

CMD ["node", "dist/index.js"]