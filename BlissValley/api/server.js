const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');




const app = express();
const port = 3000;

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


app.get('/users', (req, res) => {
  db.query('SELECT * FROM UserData', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
