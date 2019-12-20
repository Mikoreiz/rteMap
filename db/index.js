const mysql = require("mysql")
const config = require("../config.json")

const pool = mysql.createConnection({
  host: config.mysqlConnectAuth.Host,
  user: config.mysqlConnectAuth.Username,
  password: config.mysqlConnectAuth.Password,
  port: config.mysqlConnectAuth.port,
  database: config.mysqlConnectAuth.DB
})

const connectToDb = () => {
  pool.connect(err => {
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
const makeQuery = (query, callback) => {
  pool.query(query, function(err, results) {
    if (!err) {
      return callback(null, results)
    } else {
      console.log("Error: " + JSON.stringify(err))
    }
  })
}

module.exports = {
  connect: connectToDb,
  makeQuery: makeQuery
}
