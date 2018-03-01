const port = process.env.PORT || 3000

const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
