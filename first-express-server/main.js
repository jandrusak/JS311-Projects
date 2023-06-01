//brings in the express module
let express = require("express");

//create the application object
let app = express()
app.use(express.json())

// GET /add two numbers
app.get("/add", function(req, res){
    let num1= parseInt(req.query.num1);
    let num2= parseInt(req.query.num2);
    let result = num1+num2; 
    return res.json({result})
});

//POST /multiplies 2 numbers
app.post('/multiply', (req, res) => {
    const result = {
     num1: req.body.num1,
     num2: req.body.num2,
    };
   
    res.json(result.num1 * result.num2);
   });





//GET /returns the negative of a number/Route parameter
app.get('/negative/:num', (req, res) => {
    const num = parseInt(req.params.num);
    const result = -num;
    return res.json({ result });
  });

app.listen(9001, function(){
    console.log("Application Running");
})