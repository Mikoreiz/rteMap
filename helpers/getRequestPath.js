const getRequestPath = httpPath => {
  return httpPath.split("/")[1]
}

module.exports = getRequestPath
