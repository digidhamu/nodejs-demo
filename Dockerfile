FROM node:lts-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000

# Run in foreground
CMD ["npm", "start"]
