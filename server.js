//.env
require('dotenv').config()

//express
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//orm
const db = require("./app/models");
db.sequelize.sync();



app.get('/', (req, res) => {
    res.json({ message: "Marketing Project" });
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});