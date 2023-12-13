const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "chatbottests",
  password: ""
});
 
const sql = "INSERT INTO `items`(`Name`, `Desc`) VALUES ('Stan Lee','A great man')";
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log("Данные добавлены");
});
 
connection.end();