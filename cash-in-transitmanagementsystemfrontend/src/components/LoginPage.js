import React, { useState,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from './UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {user,setUser}= useContext(UserContext);
  
let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await fetch('https://localhost:7201/api/Authenticate/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
    
      const data = await response.json();
    
      if (response.ok) {
        setUser(data.user);
        console.log(data);
        alert("Welcome "+ data.user.FullName);
        history('/Home');
      } else if (response.status === 400) {
        setError(data.message);
        console.log(data);
      } else if (response.status === 401) {
        setError(data.message);
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again. '+ err );
    }
    
  };

  return (
    <div>

      <form onSubmit={handleSubmit} class="row g-3">
      <h2>Login</h2>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
    <input type="text"  class="form-control" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
    <input type="password" class="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
    </div>
  </div>
  
  <div class="mb-3 row"> 
  <div class="text-center">
  {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  <div class="mb-3 row">
  <div class="col-12">
  <button  type="submit" class="btn btn-primary ">Login</button>
  
  </div>
  </div>

  <div class="mb-3 row"> 

  <div class="col-12">
  
  <a class="btn btn-danger" href="/">Back</a>
  </div>
  </div>
  
  <div class="text-center">
    <p>Not a member? <a href="/Register">Register</a></p> 
  </div>
  </div>


</form>


    </div>
  );
};

export default Login;
