import express from "express"
import bodyParser from "body-parser"
import connectDB from "./config/db.js"
import urlRoutes from "./routes/urlRoutes.js"
import cors from "cors";
import dotenv from "dotenv";

const app = express()
const port = 3000
dotenv.config();

connectDB();

const frontendUrl = process.env.FRONTEND_URL;
console.log(`Frontend URL: ${frontendUrl}`);


app.use(
  cors({
    origin: frontendUrl,
  })
);

app.use(bodyParser.json())

app.use("/", urlRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  });
  