const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const path = require("path")
const app = express();

// Connect to database
connectDB();

app.use(express.static("public"));

app.get("*",(req,res)=>{
 res.sendFile(path.resolve(__dirname,"public","index.html"))
})

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.use('/', function (req, res, next) {
  res.send({ "name": "KISHAN" });
  next();
});
app.listen(port,()=>{

  console.log(`Server running on port ${port}`)});
