'use strict';

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const PORT = 3000;

const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const bookRoutes = require('./routes/book')
const server = require('./db');

app.use(cors()); 
app.use(morgan('tiny'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('', loginRoutes)
app.use('', signupRoutes)
app.use('', bookRoutes)

app.listen(PORT, () => {
    console.log(`Server Started At port ${PORT}`)
})