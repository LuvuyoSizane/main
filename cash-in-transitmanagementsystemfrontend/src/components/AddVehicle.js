// src/components/AddVehicle.js
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const AddVehicle = () => {
  let history = useNavigate();
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState('');
  
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
     
      const vehicle = { registrationNumber, type, capacity};
      e.preventDefault();
      try {
          const response = await fetch('https://localhost:7201/api/UserVehicle/AddVehicle', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(vehicle),
          });

          const data = await response.json();

          if (response.ok) {
              alert(data.message);
              history('/VehicleList');
          } else {
              setError(data.error );
          }
      } catch (error) {
          setError('Error adding vehicle:', error);
      }
  };


  return (
  
      <div>      
        <form onSubmit={handleSubmit} class="row g-3">
        <h2>Add Vehicle</h2>

            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Registration Number</label>
                <div class="col-sm-10">
                <input type="text"  class="form-control" 
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        required />
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" value={type}
                        onChange={(e) => setType(e.target.value)}
                        required/>
                </div>
            </div>
            
            <div class="mb-3 row">
                <label  class="col-sm-2 col-form-label">Capacity</label>
                <div class="col-sm-10">
                <input type="number" class="form-control" value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        required/>
                </div>
            </div>

            
            <div class="mb-3 row"> 
            <div class="text-center">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
             
            <div class="mb-3 row">
                        <div class="col-12">
                        <button  type="submit" class="btn btn-primary ">Add New Vehicle</button>
                        </div>
                </div> 
                
            <div class="mb-3 row">
                        <div class="col-12">
                        <a class="btn btn-danger" href="/VehicleList">Back</a> 
                        </div>
                </div>  
            
            </div>
        </form>

        </div>

  );
};

export default AddVehicle;
