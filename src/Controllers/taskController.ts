import { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import taskCollection from '../Models/taskModel'

class TaskController {
    // @desc Get Task List
    // @route GET /api/tasks
    // @access Private
    static getTaskList = expressAsyncHandler(
        async (req: Request, res: Response) => {
            try {
                const taskList = await taskCollection.find()
                res.status(200).json(taskList)
            } catch (error) {
                res.status(400)
                throw new Error(`Error fetching task list: ${error}`)
            }
        }
    )

    // @desc Get Task
    // @route GET /api/tasks:id
    // @access Private
    static getTask = expressAsyncHandler(
        async (req: Request, res: Response) => {
            const id = req.params.id

            try {
                const task = await taskCollection.findById(id)
                res.status(200).json(task)
            } catch (error: any) {
                res.status(400)
                if (error.kind === 'ObjectId') {
                    throw new Error(`Task with id:${id} not found`)
                }
                throw new Error(`Error fetching task: ${error}`)
            }
        }
    )

    // @desc Set Task
    // @route POST /api/tasks
    // @access Private
    static setTask = expressAsyncHandler(
        async (req: Request, res: Response) => {
            const data = req.body

            try {
                const newTask = await taskCollection.create({
                    text: data.text,
                    day: data.day,
                    reminder: data.reminder,
                })
                res.status(200).json(newTask)
            } catch (error) {
                res.status(400)
                throw new Error(`Error creating task: ${error}`)
            }
        }
    )

    // @desc Update Task
    // @route PUT /api/tasks:id
    // @access Private
    static updateTask = expressAsyncHandler(
        async (req: Request, res: Response) => {
            const id = req.params.id
            const data = req.body

            try {
                const updatedTask = await taskCollection.findByIdAndUpdate(
                    id,
                    data,
                    {
                        new: true,
                    }
                )
                res.status(200).json(updatedTask)
            } catch (error: any) {
                res.status(400)
                if (error.kind === 'ObjectId') {
                    throw new Error(`Task with id:${id} not found`)
                }
                throw new Error(`Error updating task: ${error}`)
            }
        }
    )

    // @desc Delete Tasks
    // @route DELETE /api/tasks:id
    // @access Private
    static deleteTask = expressAsyncHandler(
        async (req: Request, res: Response) => {
            const id = req.params.id

            try {
                const task = await taskCollection.findById(id)
                task?.remove()
                res.status(200).json({ message: 'Delete success', id: id })
            } catch (error: any) {
                res.status(400)
                if (error.kind === 'ObjectId') {
                    throw new Error(`Task with id:${id} not found`)
                }
                throw new Error(`Error deleting task: ${error}`)
            }
        }
    )
}

export default TaskController
