const express = require('express');
const morgan = require('morgan');
const app = express();

const loggerStream = {
  write: message => console.log(`From loggerStream: ${message}`),
};

app.use(morgan('tiny', { stream: loggerStream }));

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server side!');
});

app.listen(3000, () => {
  console.log(`App running on port 3000...`);
});
