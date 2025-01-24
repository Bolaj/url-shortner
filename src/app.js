import express from "express"
import bodyParser from "body-parser"
import connectDB from "./config/db.js"
import urlRoutes from "./routes/urlRoutes.js"
import cors from "cors";


const app = express()
const port = 3000

connectDB();

const corsOptions = {
  origin: ["http://localhost:3001"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.use("/", urlRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  });
  