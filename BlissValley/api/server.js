const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const consumerApiKey = 'YOUR_CONSUMER'
const apiSecretKey = 'YOUR_API'
const plainCredential = `${consumerApiKey}:${apiSecretKey}`


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Ensure the header exists and starts with "Basic"
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return res.status(401).send('Missing or invalid Authorization header');
  }

  // Extract and decode the Base64 token
  const base64Token = authHeader.split(' ')[1]; // Get the Base64 part after "Basic"
  const decodedToken = Buffer.from(base64Token, 'base64').toString('utf-8');

  // Split into username and password (or API key/secret)
  const [username, password] = decodedToken.split(':');

  // Validate credentials
  const expectedUsername = consumerApiKey;
  const expectedPassword = apiSecretKey; // Replace with your actual credentials

  if (username === expectedUsername && password === expectedPassword) {
    // Credentials are valid; proceed to the next middleware
    next();
  } else {
    // Invalid credentials
    res.status(403).send('Invalid credentials');
  }
};


const app = express();
const port = 2999;


app.use(bodyParser.json());
app.use(cors());

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
        const token = bearerToken;
        res.json({ token });
        console.log(token)
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
    const bearerToken = Buffer.from(plainCredential).toString('base64')
    const token = bearerToken;
    console.log(token)
    return res.status(200).json({'token' : token, 'user_id': user.id});
  });
});


app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

// Mood routes
app.post('/mood', authenticateToken, (req, res) => {
  const { mood, date, user_id } = req.body;

  if (!user_id || typeof mood !== 'number' || typeof date !== 'string') {
    return res.status(400).send('Données invalides');
  }

  const checkUserQuery = 'SELECT id FROM User WHERE id = ?'; // Vérifie l'existence de l'utilisateur
  db.query(checkUserQuery, [user_id], (err, results) => {
    if (err) {
      console.error('Erreur lors de la vérification de l\'utilisateur :', err);
      return res.status(500).send('Erreur serveur');
    }

    if (results.length === 0) {
      return res.status(404).send('Utilisateur non trouvé');
    }

    // Si l'utilisateur existe, on ajoute l'humeur
    const insertMoodQuery = 'INSERT INTO MoodFollowing (mood, date, user_id) VALUES (?, ?, ?)';
    db.query(insertMoodQuery, [mood, date, user_id], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion dans la base de données :', err);
        res.status(500).send('Erreur serveur');
      } else {
        res.status(200).send('Humeur ajoutée avec succès');
      }
    });
  });
});



// App routes
app.use((req, res, next) => {
  console.log(`Requête reçue : ${req.method} ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

