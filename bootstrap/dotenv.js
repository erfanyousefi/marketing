//Use dotenv to load environment variables from .env file
const dotenv = require("dotenv").config();

//Dotenv Error handling
if (dotenv.error) {
    console.log(dotenv.error);
}