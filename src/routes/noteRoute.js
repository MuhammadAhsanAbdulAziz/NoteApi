const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/",(req,res)=>{
    res.send("");
});

noteRouter.post("/",(req,res)=>{
    res.send("");
});

module.exports = noteRouter;