from node:18.20.2-alpine

WORKDIR /app

COPY ./package.json ./package.json

# Set npm configuration options to increase timeout
# RUN npm config set registry https://registry.npm.taobao.org/

RUN npm install  --save
COPY . .

CMD ["npm", "run", "dev"]
