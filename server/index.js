const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('server/models');

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});