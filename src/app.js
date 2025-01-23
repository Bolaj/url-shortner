import express from "express"
import bodyParser from "body-parser"
import connectDB from "./config/db.js"
import urlRoutes from "./routes/urlRoutes.js"

const app = express()
const port = 3000

connectDB();

// Middleware
app.use(bodyParser.json())

// Routes
app.use("/", urlRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  });
  