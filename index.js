const express = require("express")
const bodyParser = require("body-parser")
const adaptRequest = require("./helpers/adaptRequest")
const handler = require("./route_info/index")
const db = require("./db/index")

const app = express()
app.use(bodyParser.json())

app.get("/routeAll", routeController)
app.get("/route/:route_id", routeController)
app.get("/routeByStop/:stop_id", routeController)

function routeController(req, res) {
  const httpRequest = adaptRequest(req)
  db.makeQuery(handler(httpRequest), function(err, results, fields) {
    if (!err) {
      res.json(results)
    } else {
      console.log(err)
    }
  })
}

app.listen(3000, () => console.log("Listening on port 3000"))
