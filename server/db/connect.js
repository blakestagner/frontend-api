var mysql = require("mysql");

const connect = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "login",
});

connect.getConnection(err => {
  if (err) {
    return "error";
  } else
    res => {
      console.log(res);
    };
});
module.exports = connect;
