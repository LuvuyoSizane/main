const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const port = 4000;
const fs = require('fs');
const EmployeeList = require('./EmployeeList.json');

app.delete('/DeleteEmployee/:id', (req, res) => {
  const id = req.params.id;
  const index = EmployeeList.findIndex(item => item.id === id);
  
  if (index !== -1) {
    EmployeeList.splice(index, 1);
    res.json({message:`Employee with id ${id} deleted.`});
    console.log('Deleted Successfully')
  } else {
    res.status(404).send('Employee not found.');
    console.log('error sent')
  }
});


app.get('/GetEmployee/:id', (req, res) => {
  const id = req.params.id;
  const user = EmployeeList.find(user => user.id === id);
  res.json(user);
});

app.get('/EmployeeList', (req, res) => {
  res.json(EmployeeList);
});

// Endpoint to add a new user (from Task 4)
app.post('/AddEmployee', (req, res) => {
    
    try {
      const {id,name,email,phone,} = req.body;

      EmployeeList.push({ id,name,email,phone });
      res.json({ message: 'Employee added successfully!' });
      fs.writeFileSync('EmployeeList.json', JSON.stringify(EmployeeList, null, 2));
      console.log('User added successfully!' );
      }
      catch(err) {
         console.log(err)
      }
  });
  
app.put('/UpdateEmployee/:id', (req, res) => {
  try {
    const userId = req.params.id;
    const { name,email,phone } = req.body;
 
    const EmployeeToUpdate = EmployeeList.find((user) => user.id === userId);
    if (EmployeeToUpdate) {
      EmployeeToUpdate.name = name;
      EmployeeToUpdate.email=email;
      EmployeeToUpdate.phone=phone;
     
      res.json({ message: 'Employee updated successfully!' });
      fs.writeFileSync('EmployeeList.json', JSON.stringify(EmployeeList, null, 2));
      console.log('Employee updated successfully!' );
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  }
  catch(err) {
     console.log(err)
  }
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
