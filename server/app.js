const express = require('express');

const PORT = process.env.PORT || 4003;
const app = express();

const log = (i) => console.log(i);

app.get('*', (req, res) => {
  log(req.ip);
  res.json({
    name: 'Braden Hancock',
  });
});

app.listen(PORT, () => {
  log('Server started');
});