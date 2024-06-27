const {Client} = require('pg')

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"password",
    database:"postgres",
})

client.connect();

client.query('CREATE TABLE cars (brand VARCHAR(255),model VARCHAR(255),year INT )',(err,res)=>{
    if(!err){
        console.log("Cars table created successfully");
    }else{
        console.log(err.message);
    }
    client.end;
})


// client.query("INSERT INTO cars (brand, model, year) VALUES ('Ford', 'Mustang', 1964),('Volvo', 'p1800', 1968),('BMW', 'M1', 1978),('Toyota', 'Celica', 1975);",(err,res)=>{
//     if(!err){
//         console.log("cars inserted into table ");
//     }else{
//         console.log(err.message);
//     }
//     client.end;
// })

client.query('Select * from cars',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})

client.query("Select * from cars WHERE brand='Ford'AND model='Mustang' AND year=1964",(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})