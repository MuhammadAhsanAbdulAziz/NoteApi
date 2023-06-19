const express = require("express");
const app = express()
const userRouter = require("./routes/userRoute");
const noteRouter = require("./routes/noteRoute");
const mongoose = require("mongoose");



app.use("/users",userRouter);
app.use("/notes",noteRouter);


app.get("/",(req,res)=>{
    res.send("hello");
});

mongoose.connect("mongodb+srv://admin:admin@cluster0.kpyqroi.mongodb.net/")
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server started on port no 5000")
    });
})
.catch((error)=>{
    console.log(error);
});

