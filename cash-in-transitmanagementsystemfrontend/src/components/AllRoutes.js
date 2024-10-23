import React, { useEffect, useState ,useContext} from 'react';
import axios from 'axios';

import { UserContext } from './UserContext';

import { useNavigate } from "react-router-dom";
const AllRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { user,setUser } = useContext(UserContext);
  let history = useNavigate();

  const handleLogout = () => {
    setUser(null)
    history('/');
  };

  useEffect(() => {
    axios.get('https://localhost:7201/api/Route/GetRoutes')
      .then(response =>{ setRoutes(response.data)
        console.log(response.data)
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://localhost:7201/api/Route/DeleteRoute/${id}`)
      .then((res) => {
        setRoutes(routes.filter(route => route.Id !== id));
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
      <h1>Routes</h1>
      <div class="col-12">

      { user.Role === 0 ||user.Role === 1? (
      <a className='btn btn-primary' href="/AddRoute">Create a Route</a>
) : null}
      &nbsp;
      <a className='btn btn-danger' href="/Home">Go Back</a>
      </div>
      <div  class="mb-3 row">
      <table className="table-primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Route Details</th>
            
{ user.Role === 0 ||user.Role === 1? (
  <th>Action</th>
) : null}
          </tr>
        </thead>
        <tbody>
          {routes.filter((route)=>{
            return searchTerm.toLowerCase()===''?route:route.Name.toLowerCase().includes(searchTerm)
          }).map(route => (
            <tr key={route.Id}>
              <td>{route.Id}</td>
             <td> {route.Name}</td>

             <td> <a className='btn btn-primary' href={`/RouteDetails/${route.Id}`}>View Route Details</a> </td>

             { user.Role === 0 ||user.Role === 1? (
               <td>
                <button className='btn btn-danger' onClick={() => handleDelete(route.Id)}>Delete</button>
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

export default AllRoutes;
