//src/components/Signup.js

import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        dsad: false,
        af: false,
        representative_email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register', formData);
            alert('User registered successfully');
        } catch (error) {
            console.error('Error registering user', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} />
            <label>
                DSAD
                <input type="checkbox" name="dsad" onChange={(e) => setFormData({ ...formData, dsad: e.target.checked })} />
            </label>
            <label>
                AF
                <input type="checkbox" name="af" onChange={(e) => setFormData({ ...formData, af: e.target.checked })} />
            </label>
            {formData.af && (
                <input type="email" name="representative_email" placeholder="Representative Email" onChange={handleChange} />
            )}
            <button type="submit">Signup</button>
        </form>
    );
}

export default Signup;
