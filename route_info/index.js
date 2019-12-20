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
    return (
      "SELECT * FROM routes WHERE route_id =" + httpRequest.pathParams.route_id
    )
  } else {
    return "SELECT * FROM routes"
  }
}

module.exports = handle
