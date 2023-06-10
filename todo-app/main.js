const express = require("express");
//create application object
const app = express();

//make the public folder available as static resources
app.use(express.static("public"));
app.use(express.json());
let PORT = 8082;
let db =  [];
let counter = 1;


app.post("/todos", function(req, res){
    let t = req.body.title;
    let n = req.body.notes;
    let newEntry = {
        title: t, 
        notes: n, 
        id: counter
    }; 
    counter ++;
    db.push(newEntry);
    res.json(newEntry);
})

app.get("/todos", function(req, res){
    let summaries = db.map(function(element){
        let summary = {};
        summary.title = element.title;
        summary.done = element.done;
        summary.id = element.id
        return summary;
    })
    res.json(db);
})

app.get("/todos", function(req, res){
    let id = req.params.id;
    let found =db.find(function(element){
        if (element.id==id){
            return true;
        } else {
            return false;
        }
    });
    if(found) {
    res.json(found);
    } else {
        res.sendStatus(404);
    }
})

app.delete("/todos", function(req, res){
    let id = req.params.id;
    
    let newDB = db.filter(function(element){
        if(element.id == id){
            return false;
        } else {
            return true;
        }
    });
    if (indexToDelete > -1){
        db.splice(indexToDelete, 1); 
        res.sendStatus(204);
    }  else {
        res.sendStatus(404);
    }
})

app.put("/todos/id", function(re, res){
    let id = req.params.id;
    let title = req.body.title;
    let notes = req.body.note;
    let done = req.body.done == true;

    let found = db.find(function(element){
        if(element.id ==id){
            return true;
        }  else {
            return false;
        }
    })

    if(found){
        found.title=title;
        found.notes = notes;
        found.done = done;
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
})

app.listen(PORT, function(){
    console.log("Todo App Started on Port", PORT);
})


