const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

// initializations
const app = express();
const port = process.env.PORT || 5000;

// serve static assets if in production 

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// connecting to db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}

);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB database connection established successfully`);
})

// routers 
const playersRouter = require('./routes/players');

app.use('/players', playersRouter);

// listenning to port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
