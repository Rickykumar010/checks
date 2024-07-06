import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from the backend when the component mounts
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://your-backend-url/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        const newTask = { title, description, status: status || 'to-do' };

        try {
            const response = await axios.post('http://your-backend-url/tasks', newTask);
            setTasks([...tasks, response.data]);
            setTitle('');
            setDescription('');
            setStatus('');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://your-backend-url/tasks/${id}`);
            setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleCreate}>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br />
                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /><br />
                <input
                    type="text"
                    placeholder="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                /><br />
                <button type="submit">Create</button>
            </form>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task._id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.status}</td>
                                <td>
                                    <button onClick={() => handleDelete(task._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
