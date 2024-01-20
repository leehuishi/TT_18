const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world");
    console.log(process.env.DB_PASSWORD);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});