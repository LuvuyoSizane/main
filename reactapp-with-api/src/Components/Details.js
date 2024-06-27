import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link} from "react-router-dom";

const Details=()=>{
    const  params = useParams();

    const [user,setUser] = useState({});

useEffect(()=>{
    fetch("http://localhost:4000/GetEmployee/"+params.id).then((res)=>{
        return res.json();
    }).then((resp)=>{
        setUser(resp)
    }).catch((err)=>{
        console.log(err.message);
    })
},[])

    return (
        <div>

                {user && 
                <div className="container">
                    <h1> The Employee name is : <b>{user.name}</b> {user.id}</h1> 
                    <div className="row">
                        <h3>Contact details</h3>
                        <h5>Employee Email : {user.email}</h5>
                        <h5>Employee Phone number : {user.phone}</h5>
                        <br></br>
                        <Link className="btn btn-danger" to="/"> Go Back to Home</Link>
                    </div>
                </div>
                    }
                    
        </div>
    )
}

export default Details;