import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams } from "react-router-dom";

const RouteDetails = () => {
    const [pickup, setPickup] = useState({});
    const [delivery, setDelivery] = useState({});
    const [personnels, setPersonnels] = useState([]);
    const [vehicle, setVehicle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`https://localhost:7201/api/Route/GetRoute/${id}`)
                .then(response => {
                    const personnelPromises = response.data.PersonnelIds.map(personnelId =>
                        axios.get(`https://localhost:7201/api/UserVehicle/GetUser/${personnelId}`)
                    );

                    Promise.all(personnelPromises)
                        .then(personnelResponses => {
                            const fetchedPersonnels = personnelResponses.map(response => response.data);
                            setPersonnels(fetchedPersonnels);
                        })
                        .catch(error => console.error(error));

                    axios.get(`https://localhost:7201/api/UserVehicle/GetVehicle/${response.data.VehicleID}`)
                        .then(response => setVehicle(response.data))
                        .catch(error => console.error(error));

                    axios.get(`https://localhost:7201/api/Scheduling/GetPickup/${response.data.PickupID}`)
                        .then(response => setPickup(response.data))
                        .catch(error => console.error(error));

                    axios.get(`https://localhost:7201/api/Scheduling/GetDelivery/${response.data.DeliveryID}`)
                        .then(response => setDelivery(response.data))
                        .catch(error => console.error(error));
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    
    return (
        <div>
           
           <div className="container">
                <h1>Route Details</h1>
                <div className="card">
                    <div className="card-body">
                                        <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label">Pick Up :</label>
                                <div class="col-sm-10">
                                <ul class="list-group">
                                <li class="list-group-item">Location : {pickup.Location}</li>
                                <li class="list-group-item">Scheduled Time : {pickup.ScheduledTime}</li>
                                
                                </ul>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label">Delivery :</label>
                                <div class="col-sm-10">
                                
                                <ul class="list-group">
                                <li class="list-group-item">Location : {delivery.Location}</li>
                                <li class="list-group-item">Scheduled Time : {delivery.ScheduledTime}</li>
                                
                                </ul>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label">Personnel :</label>
                                <div class="col-sm-10">
                                <ul class="list-group">
                                {personnels.map(person=>(
                                <li class="list-group-item"> FullName: {person.FullName}   |   Role: {person.Role === 0 ? 'Admin': person.Role===1? 'Dispatcher' : person.Role === 2 ? 'Driver' : person.Role ===3 ? 'Security Personnel': 'Unknown'}</li>
                                 ))}
                                </ul>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label">Vehicle :</label>
                                <div class="col-sm-10">
                                <ul class="list-group">
                                <li class="list-group-item">Registration : {vehicle.RegistrationNumber}</li>
                                <li class="list-group-item">Type : {vehicle.Type}</li>
                                <li class="list-group-item">Capacity : {vehicle.Capacity}</li>
                                </ul>
    
                                </div>
                            </div>
          
                    </div>
                </div>
                {/* Add more components as needed */}
             </div>

                <div className="mb-3 row">
                        <div className="col-12">
                        <a className="btn btn-danger" href="/AllRoutes">Back</a> 
                        </div>
                </div>  
          
        </div>
    );
};

export default RouteDetails;
