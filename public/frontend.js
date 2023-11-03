document.getElementById("button").addEventListener("click", function(){

  let input = document.getElementById("input").value;
  fetch("http://localhost:8001/items").then(function(response){
      return response.json()
    }) .then(function(json){
      console.log(json);

    })
})

