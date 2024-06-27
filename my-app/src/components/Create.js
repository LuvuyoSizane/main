import React, {useState} from "react";
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Employees from "./Employees";
import{v4 as uuid} from 'uuid';
import {Link,useNavigate}from 'react-router-dom'

function Create(){
    const [name,setName]= useState('');
    const [age,setAge]= useState('');
    
    let history = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids= uuid();
        let uniqueid = ids.slice(0,8);

        Employees.push({id:uniqueid,Name:name,Age:age});
        alert("Employee added successfully")
        history("/");
    }

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="FormName">
                    <Form.Control type="text" placeholder = "Enter Name" required onChange={(e)=> setName(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="FormAge">
                    <Form.Control type="number" placeholder = "Enter Age" required onChange={(e)=> setAge(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Create;