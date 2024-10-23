// SomeComponent.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const { user,setUser } = useContext(UserContext);
  let history = useNavigate();

  const handleLogout = () => {
    setUser(null)
    history('/');
  };

  return (
    <div className='container'>
     
      <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Cash in Transit</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleLogout} >Logout</a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
      <h2>Welcome, {user.FullName}</h2>
          </div>

    
    <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            
         { user.Role === 0 && (
          
              <div className="col-md-4" >
                <div className="card mb-4 shadow-sm">
                  <img src="/Personnel.jpg"width="500" height="300" className="card-img-top" alt="Random" />
                  <div className="card-body">
                    <p className="card-text">Manage Personnel either by Viewing, Adding, Editing or Deleting their details</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a  className="btn btn-sm btn-outline-secondary" href="/UserList">View</a>
                      </div>
                      <small className="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
         )}

{ user.Role === 0 ||user.Role === 1 ? (


              <div className="col-md-4" >
                <div className="card mb-4 shadow-sm">
                  <img src={`https://www.moneyweb.co.za/wp-content/uploads/2014/07/2012-09-28-304-G4S-Vehicle-Shoot-HDR-Large-Large.jpg`} width="500" height="300" className="card-img-top" alt="Random" />
                  <div className="card-body">
                    <p className="card-text">Manage Vehicles either by Viewing, Adding, Editing or Deleting their details</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a  className="btn btn-sm btn-outline-secondary" href="/VehicleList">View</a>
                      </div>
                      <small className="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
) : null}


{ user.Role === 0 ||user.Role === 1 ||user.Role === 2 ||user.Role === 3? (
              <div className="col-md-4" >
                <div className="card mb-4 shadow-sm">
                  <img src="/Routes.webp" width="600" height="300" className="card-img-top" alt="Random" />
                  <div className="card-body">
                    <p className="card-text">Manage Routes by Adding Pick up and Delivery points, adding the vehicle and personnel to your route</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      <a className="btn btn-sm btn-outline-secondary" href="/Pickups">View Pickup points</a>
                      <a className="btn btn-sm btn-outline-secondary" href="/Deliverys">View Delivery points</a>
                        <a className="btn btn-sm btn-outline-secondary" href="/AllRoutes">View Routes</a>
                      </div>
                      <small className="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
           ) : null}
              
              { user.Role === 0 || user.Role === 1 ||user.Role === 2 ||user.Role === 3? (

              <div className="col-md-4" >
                <div className="card mb-4 shadow-sm">
                  <img src={`https://t3.ftcdn.net/jpg/05/00/90/58/360_F_500905880_fLL3iddu6dktKeSX8T2MsLqRs3Es7E6R.jpg`} width="600" height="300" className="card-img-top" alt="Random" />
                  <div className="card-body">
                    <p className="card-text">Manage Incidents by Viewing and Reporting them</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      <a className="btn btn-sm btn-outline-secondary" href="/Incidents">View</a>
                      </div>
                      <small className="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
                ) : null}


          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
