let express = require("express");

let PORT = 8001;

let app = express();
app.use(express.json()); 
app.use(express.static("public"))


let routes = require("./routes");
app.use(routes);

app.listen(PORT, function(){
    console.log("Application started on port", PORT);
  });

// app.get("/hello", function(req, res){
//     console.log("In GET /hello");
//     resizeBy.json("Hello there.")
//   });
