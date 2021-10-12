import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import path, {dirname}  from "path";
import { fileURLToPath } from "url";
import userRouter from "./routes/userRouter.js";
import transactionRouter from "./routes/transactionRouter.js";

const app = express();
const port = process.env.PORT || 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
//app.use(express.static("./public/css"));


mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)
.then(()=> console.log("DB connected Successfully...!!!"))
.catch((err)=> console.log(err));

app.use("/api/user",userRouter);
app.use("/api/transaction", transactionRouter);


app.get(
    "/",
    (req,res)=>{
        res.sendFile(__dirname + "/public/index.html");
    }
)

app.get(
    "/:username",
    (req,res)=>{
        res.sendFile(path.join(__dirname, "./public", "summarydashboard.html"));
    }
)

app.listen(
    port,
    ()=>{
        console.log(`Server running on port ${port}`);
    }
)
