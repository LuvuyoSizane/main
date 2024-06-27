import {useEffect, useState } from "react";
import { Link,useNavigate ,useParams} from "react-router-dom";

const EditEmployee=()=>{
    const  params = useParams();

const [id,setId] = useState("");
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [validation,setValidation] = useState(false);


useEffect(()=>{
    fetch("http://localhost:4000/GetEmployee/"+params.id).then((res)=>{
        return res.json();
    }).then((resp)=>{
        setId(resp.id);
        setName(resp.name);
        setEmail(resp.email);
        setPhone(resp.phone);
    }).catch((err)=>{
        console.log(err.message);
    })
},[])

let history = useNavigate();

const handleSubmit =(e)=>{
    e.preventDefault();
    const empData={id,name,email,phone};

    fetch("http://localhost:4000/UpdateEmployee/"+id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(empData)
    }).then((res)=>{  
         return res.json();
    }).then((resp)=>{
        alert(resp.message)
        history('/');
        
    }).catch((err)=>{
        console.log(err.message);
    })

}
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{"textAlign":"left"}}> 
                            <div className="card-title" style={{"textAlign":"center"}}>
                                <h2>Edit Employee Details</h2>

                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                             <label>ID :</label>
                                             <input type="number" className="form-control" value={id} disabled="disabled" ></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                             <label>Name :</label>
                                             <input type="text" className="form-control" value={name} onMouseDown={e=>setValidation(true)} onChange={e=>setName(e.target.value)} required></input>
                                             {name.length == 0 && validation &&   <span className="text-danger"> Enter the Employees Name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                             <label>Email :</label>
                                             <input type="email" className="form-control"value={email} onChange={e=>setEmail(e.target.value)} required></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                             <label>Phone :</label>
                                             <input className="form-control" value={phone} onChange={e=>setPhone(e.target.value)} required></input>
                                        </div>
                                        <br>
                                    </br>

                                    </div>

                                   
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit"> Update </button>
                                            &nbsp;
                                            <Link to="/" className="btn btn-danger">Back</Link>
        
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee;