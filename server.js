// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;  // Portu 5001 olarak değiştirdim

app.use(bodyParser.json());
app.use(cors());

const uri = 'mongodb+srv://onurnebi61:14530nurhan@minecardmdb.kuky3xd.mongodb.net/?retryWrites=true&w=majority&appName=mineCardMDB';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  phoneNumber: String,
  password: String,
  name: String,
  surname: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { phoneNumber, password, name, surname, email } = req.body;

  const existingUser = await User.findOne({ phoneNumber });
  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ phoneNumber, password: hashedPassword, name, surname, email });
  await user.save();

  res.send('User registered successfully');
});

app.post('/login', async (req, res) => {
  const { phoneNumber, password } = req.body;

  const user = await User.findOne({ phoneNumber });
  if (!user) {
    return res.status(400).send('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid password');
  }

  res.send('Login successful');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
