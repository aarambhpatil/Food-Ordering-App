import express,{Request, Response} from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>{
    console.log("Connected to Database");
})

const port = 7000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async(req:Request, res:Response) => {
    res.json({message:"Hello World"});
})

app.listen(port, ()=>{
    console.log(`Server started on port:${port}`);
})