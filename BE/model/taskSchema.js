const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, required: true, enum: ['to-do', 'in progress', 'done'], default: 'to-do' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

taskSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = { taskModel };
