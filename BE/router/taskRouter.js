const express = require('express');
const taskModel = require('../model/taskSchema');


const taskRouter = express.Router();

// Create a new task
taskRouter.post('/tasks', async (req, res) => {
    try {
        const task = new taskModel(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all tasks
taskRouter.get('/tasks', async (req, res) => {
    try {
        const tasks = await taskModel.find({});
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read a task by id
taskRouter.get('/tasks/:id', async (req, res) => {
    try {
        const task = await taskModel.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a task by id
taskRouter.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'status'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const task = await taskModel.findById(req.params.id);

        if (!task) {
            return res.status(404).send();
        }

        updates.forEach((update) => (task[update] = req.body[update]));
        await task.save();

        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a task by id
taskRouter.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await taskModel.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).send();
        }

        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = { taskRouter };
