import express from 'express'
import TaskController from '../Controllers/taskController'

const router = express.Router()

router.route('/').get(TaskController.getTaskList).post(TaskController.setTask)
router
    .route('/:id')
    .get(TaskController.getTask)
    .put(TaskController.updateTask)
    .delete(TaskController.deleteTask)

export default router
