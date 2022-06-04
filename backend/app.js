const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
  res.status(200).json({
    success: true,
    message: "GET request successful"
  })
})

app.listen(PORT, ()=>{
  console.log("app is listening on port 5000");
})