const config = require("../config.json")

const handle = httpRequest => {
  switch (httpRequest.method) {
    case "GET":
      return getRouteInfo(httpRequest)
    default:
      return "Method not allowed"
  }
}

function getRouteInfo(httpRequest) {
  if (httpRequest.pathParams.route_id) {
    return config.select.routeById + httpRequest.pathParams.route_id
  } else {
    return config.select.allRoutes
  }
}

module.exports = handle
