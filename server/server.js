const express = require('express');
const db = require('mongoose');

db.connect('mongodb://127.0.0.1:27017/practicalDb')
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => console.log(err));

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const schema = new db.Schema({
  name: String,
  email: String,
  password: String, 
});

const dbModel = db.model('PersonalData', schema);

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await dbModel.findOne({ email });
    if (userExists) {
      return res.status(400).send('User already exists');
    }

    const dbSave = new dbModel({ name, email, password });
    await dbSave.save();
    res.send('Registration successful');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await dbModel.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }

    res.send('Login successful');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

app.listen(5001, () => {
  console.log('Connected to backend');
});
