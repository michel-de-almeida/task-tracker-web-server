import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please name the task'],
        },
        day: {
            type: String,
            required: [true, 'Please add a completion date'],
        },
        reminder: {
            type: Boolean,
        },
    },
    { timestamps: true }
)

const taskCollection = mongoose.model('Task', taskSchema)

export default taskCollection
