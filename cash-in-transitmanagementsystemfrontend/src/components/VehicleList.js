
import React, { useEffect, useState ,useContext} from 'react';
import axios from 'axios';

import { UserContext } from './UserContext';

import { useNavigate } from "react-router-dom";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { user,setUser } = useContext(UserContext);
  let history = useNavigate();

  const handleLogout = () => {
    setUser(null)
    history('/');
  };

  useEffect(() => {
    axios.get('https://localhost:7201/api/UserVehicle/GetVehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://localhost:7201/api/UserVehicle/DeleteVehicle/${id}`)
      .then((response) => {
        alert(response.data.message);
        setVehicles(vehicles.filter(vehicle => vehicle.Id !== id))})
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
      <h1>Vehicle Details</h1>
      <div class="col-12">

      <a className='btn btn-primary' href="/AddVehicle">Add New Vehicle</a>
      &nbsp;
      <a className='btn btn-danger' href="/Home">Go Back</a>
      </div>
      <div  class="mb-3 row">
      <table className="table-primary">
        <thead>
          <tr>
            <th>Id</th>
           <th>Registration Number</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         
          {vehicles.filter((vehicle)=>{
            return searchTerm.toLowerCase()===''?vehicle:vehicle.RegistrationNumber.toLowerCase().includes(searchTerm)||
            vehicle.Type.toLowerCase().includes(searchTerm)
          }).map(vehicle => (
            <tr key={vehicle.Id}>
              <td>{vehicle.Id}</td>
              <td>{vehicle.RegistrationNumber}</td>
              <td>{vehicle.Type}</td>
              <td>{vehicle.Capacity}</td>
              <td>
                <a className='btn btn-primary'  href={`/EditVehicle/${vehicle.Id}`}>Edit</a>
                &nbsp;
                <button className='btn btn-danger' onClick={() => handleDelete(vehicle.id)}>Delete</button>
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

export default VehicleList;
