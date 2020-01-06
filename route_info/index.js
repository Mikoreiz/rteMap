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
    return config.select.route.byId + httpRequest.pathParams.route_id
  } else if (httpRequest.pathParams.stop_id) {
    return config.select.route.byStop + httpRequest.pathParams.stop_id
  } else {
    return config.select.route.all
  }
}

module.exports = handle
