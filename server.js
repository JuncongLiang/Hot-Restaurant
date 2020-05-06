const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const reservations =[];
const waitingList =[];

app.get("/", function(req, res){

});


app.get("/reservation", function(req, res){

});

app.get("/api/tables", function(req, res){

});

app.get("/api/waitinglist",function(req, res){

});

app.post("/api/newreservation", function(req, res){

});

app.listen(PORT, function(){
    console.log("App Listening on PORT " + PORT);
});
