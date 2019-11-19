const config = require("../config.json")
const mysql = require("mysql")

const mysqlConnection = mysql.createConnection({
  host: config.mysqlConnectAuth.sqlHost,
  user: config.mysqlConnectAuth.sqlUsername,
  password: config.mysqlConnectAuth.sqlPassword,
  port: config.mysqlConnectAuth.port,
  database: config.mysqlConnectAuth.sqlDB
})

const makeDb = () => {
  mysqlConnection.connect(err => {
    if (!err) {
      console.log("DB connected")
    } else {
      console.log(
        "DB connection unsuccessful \n Error: " +
          JSON.stringify(err, undefined, 2)
      )
    }
  })
}

module.exports = makeDb
