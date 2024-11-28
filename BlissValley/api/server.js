const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = 2999;

app.use(bodyParser.json());
app.use(cors(
));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'mdp',
  database: 'BlissValley'
});

db.connect((err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Connected to BlissValley database');
  }
});


// Authentication routes
app.post('/signup', async (req, res) => {
  const { firstName, email, password } = req.body;
  console.log('Requête reçue:', req.body);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO User (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [firstName, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion dans la base de données :', err);
        res.status(500).send('Erreur serveur');
      } else {
        res.status(200).send('Utilisateur ajouté avec succès');
      }
    });
  } catch (error) {
    console.error('Erreur lors du hashage du mot de passe :', error);
    res.status(500).send('Erreur serveur');
    
  }
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Requête reçue:', req.body);

  if (!email || !password) {
    return res.status(400).send('Tous les champs sont obligatoires.');
  }

  // Vérifiez si l'utilisateur existe
  const query = 'SELECT * FROM User WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Erreur lors de la vérification de l\'email :', err);
      return res.status(500).send('Erreur serveur.');
    }

    if (results.length === 0) {
      return res.status(401).send('Email ou mot de passe incorrect.');
    }

    const user = results[0];

    // Comparer les mots de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send('Email ou mot de passe incorrect.');
    }

    // Connexion réussie
    res.status(200).send('Connexion réussie.');
  });
});

app.use((req, res, next) => {
  console.log(`Requête reçue : ${req.method} ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

