
import express from "express"
import connection from "./database/db.js";
const app = express();
const port = 8000;
app.listen(port,()=>console.log(`server is running on${port}`));
connection();