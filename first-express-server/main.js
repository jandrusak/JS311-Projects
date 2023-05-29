//brings in the express module
let express = require("express");

//create the application object
let app = express()

app.get("/", function(request, response){
    response.send("Hello");
})

app.listen(9001, function(){
    console.log("Application started");
})