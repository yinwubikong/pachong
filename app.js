let express=require('express');
let app=express();
let path = require('path');
let Movie=require("./model").movie;
app.use(express.static(path.resolve('public')));
app.set("view engine",'html');
app.engine('html',require('ejs').__express);
app.get("/",function(req,res){
    Movie.find({},function(err,movies){
        res.render('index',{movies});

    })
});
121.41.33.73
app.listen(10000);