const express = require("express")
const router = express.Router()

const { 
  searchServiceName, 
  searchServiceRadius 
} = require("../controllers/searchController")

router.route("/:role").get(searchServiceName)
router.route("/:role/:radius").get(searchServiceRadius)

module.exports = router;