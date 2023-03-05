const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const uri =
  'mongodb+srv://admin:<password>@<clusterurl>/<dbname>?retryWrites=true&w=majority';
mongoose.pluralize(null);
mongoose.connect(uri);
const dbconn = mongoose.connection;

try {
  dbconn.on('open', () => {
    console.log('MongoDb connected');
  });
} catch (err) {
  console.log('Error ' + err);
}

const noder = require('./app/routes/routes.js');
app.use('/product', noder);

const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
