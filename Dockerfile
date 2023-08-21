FROM node:16-alpine as builder

ENV NODE_ENV build

#USER node
WORKDIR /home/node

COPY package*.json ./
RUN npm i -g yarn --force
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .
RUN yarn build
RUN yarn install --production

RUN ls .
RUN ls dist/apps
ENV NODE_ENV production
CMD ["yarn", "start"]
