'use strict';

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./src/routes');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
