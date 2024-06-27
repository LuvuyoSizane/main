import {Link,useNavigate}from 'react-router-dom'
import { useState,useEffect } from 'react';
const EmployeeList = ()=> {
    const navigate = useNavigate();
    const[EmployeeList,setEmployeeList] = useState(null);
useEffect(()=>{
    fetch("http://localhost:4000/EmployeeList").then((res)=>{
        return res.json();
    }).then((resp)=>{
        setEmployeeList(resp)
    }).catch((err)=>{
        console.log(err.message);
    })
},[])

const EditEmployee = (Empid)=>{
navigate ("/EditEmployee/"+Empid);
}

const DeleteEmployee = (Empid)=>{
    if(window.confirm('Do you want to remove Employee?')){
       
        fetch("http://localhost:4000/DeleteEmployee/"+Empid,{
            method:"DELETE"
        }).then((res)=>{
            return res.json();
        }).then((resp)=>{
            alert(resp.message)
            window.location.reload(); 
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    
}

const LoadDetails = (Empid)=>{
    navigate('/Details/'+Empid);
}

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div>
                        <Link to="/AddEmployee" className='btn btn-success lg'> Add new Employee [+]</Link>
                    </div>
                    <br></br>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                    
                        </thead>
                        <tbody>
                            {   EmployeeList && EmployeeList.length>0    
                                 ?
                                EmployeeList.map(item=>(
                                    <tr key={item.id}>
                                        <td> {item.id}</td>
                                        <td> {item.name} </td>
                                        <td> {item.email} </td>
                                        <td> {item.phone} </td>
                                    <td>
                                        <a onClick={()=>{EditEmployee(item.id)}} className='btn btn-success'>Edit</a>
                                        &nbsp;
                                        <a onClick={()=>{DeleteEmployee(item.id)}} className='btn btn-danger'>Delete</a>
                                        &nbsp;
                                        <a onClick={()=>{LoadDetails(item.id)}} className='btn btn-primary'>Details </a>
                                    </td>    
                                    </tr>
                        

                                ))
                                  :
                                  <tr><td>
                                      "No Employees available"
                                    </td></tr>
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;