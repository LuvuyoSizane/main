// src/components/Deliverys.js
import React, { useEffect, useState ,useContext} from 'react';
import axios from 'axios';

import { UserContext } from './UserContext';

import { useNavigate } from "react-router-dom";
const Deliverys = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { user,setUser } = useContext(UserContext);
  let history = useNavigate();

  const handleLogout = () => {
    setUser(null)
    history('/');
  };
  useEffect(() => {
    axios.get('https://localhost:7201/api/Scheduling/GetDeliveries')
      .then(response => setDeliveries(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://localhost:7201/api/Scheduling/DeleteDelivery/${id}`)
      .then((res) => {
        setDeliveries(deliveries.filter(d => d.Id !== id));
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
      <h1>Delivery Details</h1>
      <div class="col-12">

      { user.Role === 0 ||user.Role === 1? (
      <a className='btn btn-primary' href="/AddDelivery">Add New Delivery</a>
) : null}
      &nbsp;
      <a className='btn btn-danger' href="/Home">Go Back</a>
      </div>
      <div  class="mb-3 row">
      <table className="table-primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Location</th>
            <th>Scheduled Time</th>

{ user.Role === 0 ||user.Role === 1? (
  <th>Actions</th>
) : null}
          </tr>
        </thead>
        <tbody>
          {deliveries.filter((delivery)=>{
            return searchTerm.toLowerCase()===''?delivery:delivery.Location.toLowerCase().includes(searchTerm)
          }).map(delivery => (
            <tr key={delivery.Id}>
              <td>{delivery.Id}</td>
              <td>{delivery.Location}</td>
              <td>{delivery.ScheduledTime}</td>
              
{ user.Role === 0 ||user.Role === 1? (
               <td>
                <button className='btn btn-danger' onClick={() => handleDelete(delivery.Id)}>Delete</button>
              </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
       </div>
      </div>
    </div>
  );
};

export default Deliverys;
