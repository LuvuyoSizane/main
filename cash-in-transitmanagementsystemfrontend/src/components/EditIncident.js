import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const EditIncident = () => {

    let history = useNavigate();
    const [Description, setDescription] = useState('');
    const [OccurredAt, setOccurredAt] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`https://localhost:7201/api/Incident/GetIncident/${id}`)
                .then(response => {
                    setDescription(response.data.Description);
                    setOccurredAt(response.data.OccurredAt);
                    setLocation(response.data.Location);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleSubmit = async (e) => {
       
        const incident = {id,Description, OccurredAt,location};
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7201/api/Incident/EditIncident', {
                method: 'PUT',
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
            setError('Error editing Incident:', error);
        }
    };

    return (
        <div>

        
        <form onSubmit={handleSubmit} class="row g-3">
        <h2>Edit Incident</h2>

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
                        <button  type="submit" class="btn btn-primary ">Update Incident</button>
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

export default EditIncident;
