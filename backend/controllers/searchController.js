const searchServiceName = (req, res, next) => {
  console.log(req.params)
  console.log(req.query)
  res.status(200).json({
    msg: "searchServiceName"
  })
}

const searchServiceRadius = (req, res, next) => {
  console.log(req.params)
  console.log(req.query)
  res.status(200).json({
    msg: "searchServiceRadius"
  })
}

module.exports = {
  searchServiceName,
  searchServiceRadius
}