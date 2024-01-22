const mysql = require("mysql");
require("dotenv").config();
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
};

const connection = mysql.createConnection(config);
const createTable = `CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id))`;
connection.query(createTable, (err, result, fields) => {
  if (err) {
    console.log("Tabela já existe");
    return;
  }

  console.log("Table created");
});
connection.end();
