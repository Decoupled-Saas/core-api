FROM node:16.19.0-alpine
ENV NODE_ENV=production

WORKDIR /usr/src
COPY package.json tsconfig.json tsconfig.build.json ./
COPY .env.example .env
RUN yarn install
COPY build .


CMD ["node", "index.js"]
