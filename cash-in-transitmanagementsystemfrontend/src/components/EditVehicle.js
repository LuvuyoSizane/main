// src/components/VehicleForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const EditVehicle = () => {
  let history = useNavigate();
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState('');
  
  const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`https://localhost:7201/api/UserVehicle/GetVehicle/${id}`)
                .then(response => {
                    setRegistrationNumber(response.data.RegistrationNumber);
                    setType(response.data.Type);
                    setCapacity(response.data.Capacity);

                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const vehicle = {id, registrationNumber, type, capacity };
       

        fetch("https://localhost:7201/api/UserVehicle/UpdateVehicle", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vehicle)
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            alert(resp.message);
            history('/VehicleList');
        }).catch((err) => {
            setError(`Error updating vehicle: ${err.message}`);
        });
    };

    return (
      <div>      
      <form onSubmit={handleSubmit} class="row g-3">
      <h2>Update Vehicle</h2>

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
                      <button  type="submit" class="btn btn-primary ">Update Vehicle Details</button>
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

export default EditVehicle;

