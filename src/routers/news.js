require("dotenv").config();
const express=require("express");

const newsRouter=express.Router();
const axios=require("axios");
const http=require("http");
const bodyPaeser=require("body-parser");
const apiKey=process.env.API_KEY;


newsRouter.use(bodyPaeser.urlencoded({extended:true}));



newsRouter.get("",function(req,res){
    const apiURL='http://newsapi.org/v2/top-headlines?country=in&apiKey='+apiKey;
   
   let newsData;
    let err;
      
   axios.get(apiURL)
    .then(response => {
        newsData=response.data.articles;
      
    })
    .catch(error => { if(error){

     err=error;
    }
}

).then(function(){
    if(!err){
        
     res.render("news",{articles:newsData}); 
    }else{
        
         res.render("news",{articles:null});
    }  
});
    

    
 

})




newsRouter.post("",function(req,res){
    let newsData;
    let err;
    
    let articleQuery=req.body.search;
    qurl='http://newsapi.org/v2/everything?q=$'+articleQuery+
    '&sortBy=popularity&' +
    'apiKey='+apiKey;
    axios.get(qurl)
    .then(response => {
        newsData=response.data.articles;
           
    })
    .catch(error => { if(error){

     err=error;
    }
}

).then(function(){
    if(!err){
        
     res.render("newsSearch",{articles:newsData}); 
    }else{
         res.render("newsSearch",{articles:null});
    }  
});
    


    



})

module.exports=newsRouter;