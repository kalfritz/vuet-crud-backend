const express = require('express');
const cors = require('cors');
const volleyball = require('volleyball');
const routes = require('./src/routes');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(volleyball);
//Mudar depois
mongoose.connect(
  process.env.MONGO_CONNECTION,

  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
);
mongoose.Promise = global.Promise;

app.use('/api/v1/products', routes);

app.use((req, res, next) => {
  const err = new Error('Not found ' + req.originalUrl);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
});

const port = process.env.PORT || 6500;
app.listen(port, () => {
  console.log(`Listening on port`, port);
});
