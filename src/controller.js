let db = [];
let idCounter = 1001;

//how do we want to respond to a request to an add item in our todo list
let addItem = function(req,res){
  // get the item info from the request: label, notes 
  let item = {
    done: false,
    label: req.body.label,
    notes: req.body.notes,
    id: idCounter
  };

  idCounter++;
  // add the item to the db array
  db.push(item);
  res.json(item);
}

let deleteItem = function(req,res){
  let id = req.params.id;
  let foundIndex; 
  let deleteItem; 
  for (let i=0; i < db.length; i++){ 
    let item = db[i];
    if(id == item.id){
      foundIndex = i;
    }
  }
  if (foundIndex >= 0){
   deleteItem = db.splice(foundIndex, 1)[0];
  }

  res.json(deleteItem)
}

let listItems = function(req,res){
  let copy = []
  for (let i=0; i < db.length; i++){ 
    let item = db[i];
    let copyItem = {
      done: item.done,
      label: item.label,
      id: item.id
    };
    copy.push(copyItem)
  }
  res.json(copy);
}

let getItem = function(req,res){
  //1. read the id we are looking for from the request
  let id = req.params.id;
  //2. look for the item with a matching id in the db array
  let foundItem;
  //3. if item found, add it to response.  if item not found, add null to response 
  for (let i=0; i < db.length; i++){ 
    if(id == db[i].id){
      foundItem = db[i]
    }
  }
  //adding it to the response 
  res.json(foundItem)
}
let updateItem = function(req,res){
  let id = req.params.id;
  let label = req.body.label
  let notes = req.body.notes
  let done = req.body.done
  let foundItem;
 
  if (done == true){
    done = true;
  }
  else {
    done = false
  }
  for (let i=0; i < db.length; i++){ 
      let item = db[i]
      if(id == item.id){
        item.done = done;
        item.label = label;
        item.notes = notes;
        foundItem = item;
    }
  }
  res.json(foundItem);
}


module.exports = {
  addItem,
  deleteItem,
  listItems,
  getItem,
  updateItem
}