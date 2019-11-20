const db = require("../db/index")

const connect = db.connect
const query = db.makeQuery("select route_id from routes")
