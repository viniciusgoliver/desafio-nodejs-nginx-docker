const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const app = express();
const port = 3000;
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
};

const connection = mysql.createConnection(config);

const arrayPeople = ["Vinicius", "João", "Maria", "José", "Pedro", "Paulo"];
const query = `INSERT INTO people(name) values ?`;
arrayPeople.map((person) => {
  const values = [[person]];
  connection.query(query, [values]);
});

const sql2 = `SELECT * FROM people`;
const list = [];
connection.query(sql2, (err, result, fields) => {
  if (err) throw err;
  result.map((person) => {
    list.push(person.name);
  });
});
connection.end();

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle Rocks!</h1>" + list.join("<br>"));
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
