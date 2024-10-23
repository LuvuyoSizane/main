import React, { useEffect, useState ,useContext} from 'react';
import axios from 'axios';

import { UserContext } from './UserContext';

import { useNavigate } from "react-router-dom";
const Incidents = () => {
    const [incidents, setIncidents] = useState([]);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

  const { user,setUser } = useContext(UserContext);
  let history = useNavigate();

  const handleLogout = () => {
    setUser(null)
    history('/');
  };

    useEffect(() => {
        axios.get('https://localhost:7201/api/Incident/GetIncidents')
          .then(response => setIncidents(response.data))
          .catch(error => console.error(error));
      }, []);
    
      
  const handleDelete = (id) => {
    axios.delete(`https://localhost:7201/api/incident/DeleteIncident/${id}`)
      .then((res) => {
        setIncidents(incidents.filter(incident => incident.Id !== id));
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
  <h1>Incidents</h1>
  <div class="col-12">

  <a className='btn btn-primary' href="/AddIncident">Add Incident</a>
  &nbsp;
  <a className='btn btn-danger' href="/Home">Go Back</a>
  </div>
  <div  class="mb-3 row">
  <table className="table-primary">
    <thead>
      <tr>
        <th>Id</th>
        <th>Description</th> 
        <th>Occurred At</th>
        <th>Location</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {incidents.filter((incident)=>{
            return searchTerm.toLowerCase()===''?incident:incident.Description.toLowerCase().includes(searchTerm)||incident.Location.toLowerCase().includes(searchTerm)
          }).map(incident => (
        <tr key={incident.Id}>
          <td>{incident.Id}</td>
          <td>{incident.Description}</td>
          <td>{incident.OccurredAt}</td>
          <td>{incident.Location}</td>
          <td>
          <a className='btn btn-primary' href={`/Editincident/${incident.Id}`}>Edit</a>
          &nbsp;
            <button className='btn btn-danger' onClick={() => handleDelete(incident.Id)}>Delete</button>
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

export default Incidents;
