const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
    host: 'b5dip6jker9pcnf3utnu-mysql.services.clever-cloud.com',
    user: 'us4g92sotpxxbk9o',
    password: 'GDZEvbhGQfKyXAdIlss7',
    database: 'b5dip6jker9pcnf3utnu'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Connection failed:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });

  app.get('/UserManagementtbl', (req, res) => {
    connection.query('SELECT * FROM UserManagementtbl', (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  });

app.listen(port, () => {
   console.log(`Server running on http://localhost:${port}`);
});