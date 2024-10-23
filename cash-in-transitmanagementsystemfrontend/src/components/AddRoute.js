// src/components/AddRoute.js
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AddRoute = () => {

    let history = useNavigate();
    const [name, setName] = useState('');
    const [pickupId, setPickup] = useState(0);
    const [deliveryId, setDelivery] = useState(0);
    const [vehicleId, setVehicle] = useState(0);
    const [personnelId, setPersonnel] = useState(0);

    const [pickups, setPickups] = useState([]);
    const [deliverys, setDeliveries] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [personnels, setPersonnels] = useState([]);
    const [error, setError] = useState('');
    const [addedpersonnels, setAddedPersonnels] = useState([]);
    const [PersonnelIds, setPersonnelIds] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7201/api/Scheduling/GetPickups')
            .then(response => setPickups(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('https://localhost:7201/api/Scheduling/GetDeliveries')
            .then(response => setDeliveries(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('https://localhost:7201/api/UserVehicle/GetUsers')
            .then(response => setPersonnels(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('https://localhost:7201/api/UserVehicle/GetVehicles')
            .then(response => setVehicles(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAddedPersonnel = () => {
        axios.get(`https://localhost:7201/api/UserVehicle/GetUser/${personnelId}`)
            .then(response => {
                if (addedpersonnels.find(ap => ap.Id == personnelId)) {
                    alert('Personnel is already added to the list of personnel');
                } else {
                    setAddedPersonnels([...addedpersonnels, response.data]);
                    setPersonnelIds([...PersonnelIds, response.data.Id]);
                    alert('Personnel successfully added to the list of personnel');
                }
            })
            .catch(error => console.error(error));
    };

    const handleSubmit = async e => {
        const route = { name, pickupId, deliveryId, vehicleId, PersonnelIds };
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7201/api/Route/AddRoute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(route),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                history('/AllRoutes');
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError('Error adding route:', error);
        }
    };

    return (
        <div>

        
        <form onSubmit={handleSubmit} class="row g-3">
        <h2>Add Route</h2>

        <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Provide Route Name </label>
                <div class="col-sm-10">
                <input type="text"  class="form-control" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>
            </div>
            
                    <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Select Pickup:</label>
                <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example" onChange={(e) => setPickup(e.target.value)}>
                    <option value="">Select an option</option> 
                    {pickups.map(point => (
                            <option key={point.Id} value={point.Id}>
                                Location: {point.Location}   |   Scheduled Time: {point.ScheduledTime}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Select Delivery:</label>
                <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example" onChange={(e) => setDelivery(e.target.value)}>
                    <option value>Select an option</option> 

                    {deliverys.map(point => (
                            <option key={point.Id} value={point.Id}>
                                Location: {point.Location}   |   Scheduled Time: {point.ScheduledTime}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Select Personnel:</label>
                <div class="col-sm-10">
                <div class="input-group mb-3">
                <select class="form-select" aria-label="Default select example" onChange={(e) => setPersonnel(e.target.value)}>
                    <option value>Select an option</option>   
                    {personnels.filter(person=>person.Role==2||person.Role==3).map(person => (
                            <option key={person.Id} value={person.Id}>
                                FullName: {person.FullName}   |   Role: {person.Role === 0 ? 'Admin': person.Role===1? 'Dispatcher' : person.Role === 2 ? 'Driver' : person.Role ===3 ? 'Security Personnel': 'Unknown'}
                            </option>
                        ))}
                    </select>    
                    
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleAddedPersonnel}>Add Selected Personnel</button>
                    </div>
                    <h3>List of personnel added to the route </h3>
                    <ul  class="list-group">
                        {addedpersonnels.map(person=>(
                        <li class="list-group-item">FullName: {person.FullName}   |   Role: {person.Role === 0 ? 'Admin': person.Role===1? 'Dispatcher' : person.Role === 2 ? 'Driver' : person.Role ===3 ? 'Security Personnel': 'Unknown'}</li>
                        ))}
                    </ul>
                </div>
               
            </div>

            
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Select Vehicle:</label>
                <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example" onChange={(e) => setVehicle(e.target.value)}>
                    <option value>Select an option</option> 
                    
                    {vehicles.map(v => (
                            <option key={v.Id} value={v.Id}>
                                 Registration Number : {v.RegistrationNumber}   |   Type: {v.Type}   |   Capacity: {v.Capacity}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div class="mb-3 row"> 
            <div class="text-center">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
             
            <div class="mb-3 row">
                        <div class="col-12">
                        <button  type="submit" class="btn btn-primary ">Add New Route</button>
                        </div>
                </div> 
                
            <div class="mb-3 row">
                        <div class="col-12">
                        <a class="btn btn-danger" href="/AllRoutes">Back</a> 
                        </div>
                </div>  
            
            </div>
        </form>

        </div>
    );
};

export default AddRoute;
