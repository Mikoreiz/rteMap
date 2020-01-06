const config = require("../config.json")
const getRequestPath = require("../helpers/getRequestPath")

const handle = httpRequest => {
  switch (httpRequest.method) {
    case "GET":
      return getRouteInfo(httpRequest)
    default:
      return "Method not allowed"
  }
}

function getRouteInfo(httpRequest) {
  const path = getRequestPath(httpRequest.path)

  switch (path) {
    case "route":
      return config.select.route.byId + httpRequest.pathParams.route_id
    case "routeByStop":
      return config.select.route.byStop + httpRequest.pathParams.stop_id
    default:
      return config.select.route.all
  }
}

module.exports = handle
