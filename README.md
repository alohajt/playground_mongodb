# playground_mongodb

# Implementation
Install MongoDB & MongoDB Compass

brew services run mongodb-community
brew services list

npm install mongoose
mongoimport -d playground -c users --file ./user.json

node app.js
In browser: http://localhost:3000/list
