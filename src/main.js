let express = require("express");
app.use(express.static("public"))

let PORT = 8001;

let app = express();
app.use(express.json()); 

let routes = require("./routes");
app.use(routes);

app.listen(PORT, function(){
    console.log("Application started on port", PORT);
  });

// app.get("/hello", function(req, res){
//     console.log("In GET /hello");
//     resizeBy.json("Hello there.")
//   });
