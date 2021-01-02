const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('API RUNNING');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Dev-Connector listening at http://localhost:${PORT}`);
});
