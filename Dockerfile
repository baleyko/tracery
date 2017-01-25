FROM    node:latest
WORKDIR /app
EXPOSE  80
ADD     package.json package.json
ADD     index.js index.js
CMD     ["npm", "start"]
