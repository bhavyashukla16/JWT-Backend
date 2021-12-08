require('dotenv').config()

const util = require("util");
const mysql = require("mysql");

const pool = mysql.createPool({
    // host     : process.env.DB_HOST,
    // user     : process.env.DB_USERNAME,
    // password : process.env.DB_PASSWORD,
    // database : process.env.DB_NAME
    host     : 'localhost' || process.env.DB_HOST,
    user     : 'root' || process.env.DB_USERNAME,
    password : 'shuklabhavya16MySQL' || process.env.DB_PASSWORD,
    database : 'jwt-admin' || process.env.DB_NAME
  });

  pool.getConnection((err, connection) =>{
      if(err){
          console.log(err);
      }else{
          console.log("mysql connected!");
      }
      if(connection) {
          let sql = 'CREATE TABLE IF NOT EXISTS user_details (user_id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), mobile_no BIGINT, email VARCHAR(100), address TEXT);'
          connection.query(sql , (err, result) => {
              if(err) {
                  throw err;
              } else {
                  console.log(result);
                  console.log('Table Created!')
              }
          })
      }
});

  
  pool.query = util.promisify(pool.query);
  module.exports = pool;