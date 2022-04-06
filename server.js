const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'm242803m!MYSQL',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not Found)
// catch-all route- MUST BE THE LAST ROUTE: This route will override all others
app.use((eq, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});