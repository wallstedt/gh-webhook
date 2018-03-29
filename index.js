const express = require('express')

const app = express();

const PORT = process.env.PORT || 8080;

app.post('/payload', (req, res) => {
  console.log('Incoming...');
  console.log(req.payload);
  res.end('hello, wordd');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});