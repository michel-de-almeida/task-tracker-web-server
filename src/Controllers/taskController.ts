import { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'

class TaskController {
    // @desc Get Task List
    // @route GET /api/tasks
    // @access Private
    static getTaskList = expressAsyncHandler(
        async (req: Request, res: Response) => {
            res.status(200).json({ message: 'Get Tasks list' })
        }
    )

    // @desc Get Task
    // @route GET /api/tasks:id
    // @access Private
    static getTask = expressAsyncHandler(
        async (req: Request, res: Response) => {
            res.status(200).json({ message: `Get Task ${req.params.id}` })
        }
    )

    // @desc Set Task
    // @route POST /api/tasks
    // @access Private
    static setTask = expressAsyncHandler(
        async (req: Request, res: Response) => {
            //console.log(req.body)
            res.status(400)
            throw new Error('Please provide a Task object')
        }
    )

    // @desc Update Task
    // @route PUT /api/tasks:id
    // @access Private
    static updateTask = expressAsyncHandler(
        async (req: Request, res: Response) => {
            res.status(200).json({ message: `Update task ${req.params.id}` })
        }
    )

    // @desc Delete Tasks
    // @route DELETE /api/tasks:id
    // @access Private
    static deleteTask = expressAsyncHandler(
        async (req: Request, res: Response) => {
            res.status(200).json({ message: `Delete task ${req.params.id}` })
        }
    )
}

export default TaskController
