import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors"
import {dbConnect} from "./config/db.js";
import router from "./routes/postRoutes.js";
import userrouter from "./routes/userRoutes.js";

dotenv.config();
const app = express()
const port = process.env.PORT || 2000 ;
dbConnect();


app.use(express.json());
app.use(cors());
app.use('/posts', router);
app.use('/user',userrouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
