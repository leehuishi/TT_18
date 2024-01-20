const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require("./server/models");

dotenv.config();

const PORT = 3001;

const app = express();

app.use(cors);
app.use(bodyParser.json());


db.sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  })

app.get("/", (req, res) => {
    res.send("Hello world");
    console.log(process.env.DB_PASSWORD);
})

// routers
const user_router = require('./app/routes/user_routes.js');

app.use('/api/users', user_router);

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
    console.log(process.env.PORT);
});