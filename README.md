# JS311_ToDo-1

1. Adding an item
POST / items 
Needs a lable and notes

2. List all items
GET / items
return an array


3. Get an item
GET /items/:id
return "null" for an item with the matching id 

4. Delete an item 
DELETE /items/:id
if an item with the matching id is found, remove it from the array

5. Update an item 
PUT /items/:id
Get id from the path parameter, get label notes and done 