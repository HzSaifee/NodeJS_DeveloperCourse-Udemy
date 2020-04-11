const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    // Using owner fieldname in user model for virtual method.
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true
});

// Using 'Task' value in user model as well.
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;