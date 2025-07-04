const express = require('express');
const { validateUserData } = require('./userValidator');

const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
  const { name, email, password, age } = req.body;
  const validation = validateUserData(name, email, password, age);

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  return res.status(200).json({ message: 'Rejestracja udana!' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'user@example.com' && password === 'Secret123') {
    return res.status(200).json({ message: 'Zalogowano pomyślnie' });
  }

  return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
});

module.exports = app;
