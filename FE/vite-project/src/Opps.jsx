import React, { useState } from 'react';

export default function Opps() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission
        // Add the new user to the users array
        setUsers([...users, { name, mobile }]);
        // Clear the inputs after submission
        setName('');
        setMobile('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='Mobile Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {/* Display list of users */}
            {users.map((user, index) => (
                <ul key={index}>
                    <li>Name: {user.name}</li>
                    <li>Mobile: {user.mobile}</li>
                </ul>
            ))}
        </div>
    );
}
