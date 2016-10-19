const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 8000);

//home page
app.get("/", (req,res)=>{
    res.render("home");
});
//about page
app.get("/about", (req,res)=>{
    res.render("about");
});

//custom 404 page
app.use((req, res)=>{
    res.status(404);
    res.render("404");
});
//custom 500 page
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Server Error");
});

app.listen(app.get("port"),() =>{
    console.log("Server started on http://localhost:"+ app.get("port"));
});