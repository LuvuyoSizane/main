// src/components/AddDelivery.js
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
const AddDelivery = () => {

    let history = useNavigate();
    const [location, setLocation] = useState('');
    const [scheduledTime, setScheduledTime] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
       
        const delivery = { location, scheduledTime};
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7201/api/Scheduling/AddDelivery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(delivery),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                history('/Deliverys');
            } else {
                setError(data.error );
            }
        } catch (error) {
            setError('Error adding Delivery:', error);
        }
    };

    return (
        <div>

        
        <form onSubmit={handleSubmit} class="row g-3">
        <h2>Add Delivery</h2>

            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Location</label>
                <div class="col-sm-10">
                <input type="text"  class="form-control" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required />
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Scheduled Time</label>
                <div class="col-sm-10">
                <input type="datetime-local" class="form-control" value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                        required/>
                </div>
            </div>
            
            

            
            <div class="mb-3 row"> 
            <div class="text-center">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
             
            <div class="mb-3 row">
                        <div class="col-12">
                        <button  type="submit" class="btn btn-primary ">Add New Delivery</button>
                        </div>
                </div> 
                
            <div class="mb-3 row">
                        <div class="col-12">
                        <a class="btn btn-danger" href="/Deliverys">Back</a> 
                        </div>
                </div>  
            
            </div>
        </form>

        </div>
    );
};

export default AddDelivery;
