import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', formData);
            alert('Login successful');
        } catch (err) {
            alert('Invalid credentials');
        }
    };

    return (
        <>  
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={handleChange} required />
            </label>
            <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <Link to="/register">Register</Link></p>
        <Link></Link>
        <p>Forgot your password? <a href="/forgot-password">Reset Password</a></p>

        
        </>
        
    );
};

export default Login;
