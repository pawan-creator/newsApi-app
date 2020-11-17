const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");


const app=express();
app.use(express.static("public"));
app.set("views","./src/views/partials");
app.set("view engine","ejs");

//Routers


const newsRouter=require("./src/routers/news");
app.use("/",newsRouter);



app.listen("3000",function(){
    console.log("server is runnig in port 3000");
})