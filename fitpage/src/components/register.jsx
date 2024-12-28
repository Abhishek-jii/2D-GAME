import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', formData);
            alert('Registration successful');
        } catch (err) {
            alert('Error during registration');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange} required />
            </label>
            <label>
                Address:
                <input type="text" name="address" onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={handleChange} required />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
