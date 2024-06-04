const express = require('express');
const app = express();
const port = 3000;

const uniqueUsers = require('./uniqueUsers.json');
const orderedUsers = require('./orderedUsers.json')


app.get('/uniqueUsers', (req, res) => {
  res.json(uniqueUsers);
});

app.get('/orderedUsers', (req, res) => {
  res.json(orderedUsers);
});

// Endpoint to add a new user (from Task 4)
app.post('/adduser', (req, res) => {
    
    try {
      const {  id,name,surname,designation,department} = req.body;

      uniqueUsers.push({ id,name,surname,designation,department });
      res.json({ message: 'User added successfully!' });
      
      }
      catch(err) {
         console.log(err)
      }
  });
  
app.put('/updateuser/:id', (req, res) => {
  try {
    const userId = req.params.id;
    const { name,surname,designation,department } = req.body;
 
    const userToUpdate = uniqueUsers.find((user) => user.id === userId);
    if (userToUpdate) {
      userToUpdate.name = name;
      userToUpdate.surname=surname;
      userToUpdate.designation=designation;
      userToUpdate.department=department;
      res.json({ message: 'User updated successfully!' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }
  catch(err) {
     console.log(err)
  }
  });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
