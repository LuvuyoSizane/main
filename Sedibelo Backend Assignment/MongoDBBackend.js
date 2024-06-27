const express = require('express');
const cors = require('cors')
const app = express();
const MongoClient = require("mongodb").MongoClient;
const multer = require("multer")

app.use(cors())
app.use(express.json())

const CONNECTIONSTRING = "mongodb+srv://luvuyosizane:luvuyoSIZANE@cluster0.36bzslx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const DBName ="ReactAppDB"
var database;
const port = 4000;

app.listen(port, () => {
    MongoClient.connect(CONNECTIONSTRING,(err,client)=>{
        database=client.db(DBName);
        console.log("Connected to MongoDb")
    })
  console.log(`Server running at http://localhost:${port}`); 
});


app.get('/EmployeeList', (req, res) => {
    database.collection("ReactAppCollection").find({}).toArray((error,result)=>{
        res.send(result)
    })
  });

app.post('/AddEmployee', multer().none(),(req, res) => {
    
    try {
      const {id,name,email,phone,} = req.body;
      database.collection("ReactAppCollection").count({},function(error,numOfEmployees){

        database.collection("ReactAppCollection").insertOne({
          id:(numOfEmployees+1).toString(),
          name: name,
          email:email,
          phone:phone
        })
      })
      
      res.json({ message: 'Employee added successfully!' });
      console.log('User added successfully!' );
      }
      catch(err) {
         console.log(err)
      }
  });


app.delete('/DeleteEmployee/:id', (req, res) => {
const id = req.params.id
    try {
      database.collection("ReactAppCollection").deleteOne({
        id:id
      })
      res.json({message:`Employee with id ${id} deleted.`});
      console.log('Deleted Successfully')
      
  }catch(err){
    res.status(404).send('Employee not found.');
    console.log('error sent')

  }
  });

  
 app.get('/GetEmployee/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const EmployeeToGet = await database.collection("ReactAppCollection").findOne({ id });
      if (EmployeeToGet) {
        res.json(EmployeeToGet);
      } else {
        res.status(404).json({ message: "Employee To Get not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching Employee data" });
    }
  });

app.put('/UpdateEmployee/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, email, phone } = req.body; 
      const EmployeeToUpdate = await database.collection("ReactAppCollection").findOne({ id: userId });
      
      if (EmployeeToUpdate) {

        EmployeeToUpdate.name = name;
        EmployeeToUpdate.email = email;
        EmployeeToUpdate.phone = phone;
        await database.collection("ReactAppCollection").updateOne({ id: userId }, { $set: EmployeeToUpdate });
        res.json({ message: 'Employee updated successfully!' });
        console.log('Employee updated successfully!');

      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
