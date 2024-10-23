// src/components/AddIncident.js
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
const AddIncident = () => {

    let history = useNavigate();
    const [Description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [OccurredAt, setOccurredAt] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
       
        const incident = { Description, OccurredAt,location};
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7201/api/Incident/AddIncident', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(incident),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                history('/Incidents');
            } else {
                setError(data.error );
            }
        } catch (error) {
            setError('Error adding Incident:', error);
        }
    };

    return (
        <div>

        
        <form onSubmit={handleSubmit} class="row g-3">
        <h2>Add Incident</h2>

            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                <input type="text"  class="form-control" 
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        required />
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Occurred At</label>
                <div class="col-sm-10">
                <input type="datetime-local" class="form-control" value={OccurredAt}
                        onChange={(e) => setOccurredAt(e.target.value)}
                        required/>
                </div>
            </div> 
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Location</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required/>
                </div>
            </div>
            
            

            
            <div class="mb-3 row"> 
            <div class="text-center">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
             
            <div class="mb-3 row">
                        <div class="col-12">
                        <button  type="submit" class="btn btn-primary ">Add New Incident</button>
                        </div>
                </div> 
                
            <div class="mb-3 row">
                        <div class="col-12">
                        <a class="btn btn-danger" href="/Incidents">Back</a> 
                        </div>
                </div>  
            
            </div>
        </form>

        </div>
    );
};

export default AddIncident;
