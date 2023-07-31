const express = require('express');

const path = require('path');

const connection = require('./config/db');

const routes = require('./routes/users');

const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());




app.use(routes);

app.listen(4000);