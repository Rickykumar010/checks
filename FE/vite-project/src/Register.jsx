import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', { name, email, password });
            console.log(response.data);
            alert('Register successful');
        } catch (error) {
            console.error('There was an error registering:', error);
        }
    };       
    return (
        <div>
            <h1>This is register</h1>
            <form onSubmit={handle}>
                <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
