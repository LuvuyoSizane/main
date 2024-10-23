import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Register = () => {
    let history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('Admin');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password, fullName, role };

        try {
            const response = await fetch('https://localhost:7201/api/Authenticate/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                history('/Login');
            } else {
                setError(data.error || 'Registration failed!');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred during registration.');
        }
    };

    return (
        <div>

        
        <form onSubmit={handleSubmit} class="row g-3">
        <h2>Register</h2>

            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                <input type="text"  class="form-control" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                </div>
            </div>
            
            <div class="mb-3 row">
                <label  class="col-sm-2 col-form-label">Full Name:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required/>
                </div>
            </div>
            
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Role:</label>
                <div class="col-sm-10">

                <select class="form-select" aria-label="Default select example" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Dispatcher">Dispatcher</option>
                    <option value="Driver">Driver</option>
                    <option value="SecurityPersonnel">Security Personnel</option>
                </select>
                </div>
            </div>

            
            <div class="mb-3 row"> 
            <div class="text-center">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
             
            <div class="mb-3 row">
                        <div class="col-12">
                        <button  type="submit" class="btn btn-primary ">Register</button>
                        </div>
                </div> 
                
            <div class="mb-3 row">
                        <div class="col-12">
                        <a class="btn btn-danger" href="/">Back</a> 
                        </div>
                </div>  
            
            </div>
        </form>

        </div>
    );
};

export default Register;
