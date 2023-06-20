const express = require("express");
const app = express()
const userRouter = require("./routes/userRoute");
const noteRouter = require("./routes/noteRoute");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(cors());
app.use("/users",userRouter);
app.use("/notes",noteRouter);


app.get("/",(req,res)=>{
    res.send("Notes Api from Muhammad Ahsan");
});



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port no "+ PORT)
    });
})
.catch((error)=>{
    console.log(error);
});
