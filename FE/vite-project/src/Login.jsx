import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {email, password });
            console.log(response.data);
            alert('login successful');
        } catch (error) {
            console.log(error);
        }
    };       
    return (
        <div>
            <h1>This is register</h1>
            <form onSubmit={handle}>
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
