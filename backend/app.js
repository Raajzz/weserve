const express = require("express")
require("dotenv").config()
const app = express()
const userRoutes = require("./routes/userRoutes")
const serviceRoutes = require("./routes/serviceRoutes")
const searchRoutes = require("./routes/searchRoutes")

app.use(express.json())
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1/search", searchRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log("app is listening on port 5000");
})