require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const adapter = new FileSync('backend/db.json');
const db = lowdb(adapter);
db.defaults({ goals: [] }).write();

const PORT = process.argv[2] || process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.status(200);
  res.json({ Hello: 'Kitty 🐱' });
});

app.post('/savegoals', (req, res) => {
  res.status(200);
  const goals = req.body;
  console.log(goals); // should be ['1ststring', '2ndstring']
  db.set('goals', goals).write();
  res.send('SUCCESS in saving goals 🥂');
});

app.get('/getgoals', (req, res) => {
  res.status(200);
  const goals = db.get('goals').value();
  res.json(goals);
});

app.listen(PORT, () => {
  console.log(`Application started on PORT ${PORT} at ${new Date()}`);
});