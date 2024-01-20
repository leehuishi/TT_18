const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require("./models");

dotenv.config();

const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

db.sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database: ', err);
  });

// routers
const userRouter = require('./routes/UserRoutes.js');

app.use('/api/users', userRouter);

app.get("/", (req, res) => {
    res.send("Hello world");
})


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});