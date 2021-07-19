
var express=require("express");
var todoControllers=require("./controllers/todoControllers");

var app =express();

app.set("view engine","ejs");

app.use(express.static("./public"));

//firing
todoControllers(app);

app.listen(3000);
console.log("port active");
