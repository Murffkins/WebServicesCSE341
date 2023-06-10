const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const indexRoutes = require('./routes/index');

const port = process.env.PORT || 3000;
const app = express();

// Use the routes
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
// app.use('/index', indexRoutes);
   // localhost:3000/index

// Uses all 'routes' files
   app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on port ${port}`)
    }
}); 