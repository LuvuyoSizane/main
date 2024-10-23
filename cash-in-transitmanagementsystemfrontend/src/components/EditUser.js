import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('Admin');
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`https://localhost:7201/api/UserVehicle/GetUser/${id}`)
                .then(response => {
                    setUsername(response.data.Username);
                    setFullName(response.data.FullName);
                    setPassword(response.data.Password);

                    switch (response.data.Role) {
                        case 0:
                            setRole('Admin');
                            break;
                        case 1:
                            setRole('Dispatcher');
                            break;
                        case 2:
                            setRole('Driver');
                            break;
                        case 3:
                            setRole('Security Personnel');
                            break;
                        default:
                            setRole('');
                    }
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleResetPassword = () => {
        setPassword("password")
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {id, username, password, fullName, role };
        console.log(user);

        fetch("https://localhost:7201/api/UserVehicle/UpdateUser", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            alert(resp.message);
            history('/UserList');
        }).catch((err) => {
            setError(`Error updating user: ${err.message}`);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="row g-3">
                <h2>Edit Personnel Details</h2>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <div class="input-group mb-3">
                        <input  type="password" className="form-control" value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    disabled aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleResetPassword}>Reset Password</button>
                        </div>
                    </div>
   
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Full Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Role:</label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="Admin">Admin</option>
                            <option value="Dispatcher">Dispatcher</option>
                            <option value="Driver">Driver</option>
                            <option value="Security Personnel">Security Personnel</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="text-center">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Update Personnel Details</button>
                        
                    </div>
                </div>
                <div className="mb-3 row">
                        <div className="col-12">
                        <a className="btn btn-danger" href="/UserList">Back</a> 
                        </div>
                </div>  
            </form>
        </div>
    );
};

export default EditUser;
