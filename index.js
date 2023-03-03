import express from "express";
const app = express();

//middleware function yang menangani request sebelum dia sampai ke route
app.use((req,res,next)=>{
    console.log("ada request masuk");
    next();
});
//route
app.get("/", (req,res)=>{
        res.send("romi");
});

app.listen(3000, ()=>{
    console.log("server telah berjalan");
});
