// src/components/UserList.js
import React, { useEffect, useState ,useContext} from 'react';
import axios from 'axios';

import { UserContext } from './UserContext';

import { useNavigate } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { user,setUser } = useContext(UserContext);
  let history = useNavigate();

  const handleLogout = () => {
    setUser(null)
    history('/');
  };

  useEffect(() => {
    axios.get('https://localhost:7201/api/UserVehicle/GetUsers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://localhost:7201/api/UserVehicle/DeleteUser/${id}`)
      .then((res) => {
        setUsers(users.filter(user => user.Id !== id));
        alert(res.data.message);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" >Cash in Transit</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={handleLogout} >Logout</a>
        </li>
        
     
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
      </form>
    </div>
  </div>
</nav>
</div>
      
        <div className="row g-3">
      <h1>Personnel Details</h1>
      <div class="col-12">

      <a className='btn btn-primary' href="/AddUser">Add New Personnel</a>
      &nbsp;
      <a className='btn btn-danger' href="/Home">Go Back</a>
      </div>
      <div  class="mb-3 row">
      <table className="table-primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.filter((user)=>{
            return searchTerm.toLowerCase()===''?user:user.FullName.toLowerCase().includes(searchTerm)
          }).map(user => (
            <tr key={user.Id}>
              <td>{user.Id}</td>
              <td>{user.Username}</td>
              <td>{user.FullName}</td>
              <td>{user.Role === 0 ? 'Admin': user.Role===1? 'Dispatcher' : user.Role === 2 ? 'Driver' : user.Role ===3 ? 'Security Personnel': 'Unknown'}</td>
              <td>
              <a className='btn btn-primary' href={`/EditUser/${user.Id}`}>Edit</a>
              &nbsp;
                <button className='btn btn-danger' onClick={() => handleDelete(user.Id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       </div>
      </div>
    </div>
  );
};

export default UserList;
