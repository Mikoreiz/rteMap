const getRoutes = ({ database }) => {
  const db = database
  db.query("select * from routes;", function(error, results) {
    if (error) {
      console.log("Error")
    } else {
      console.log(results)
    }
  })
}

module.exports = getRoutes
