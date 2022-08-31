import express from 'express'
import dotenv from 'dotenv'
import router from './Routes/taskRoutes'
import cors from 'cors'
import errorHandler from './Middleware/errorMiddleware'

dotenv.config()
const port = process.env.port || 5000
const api = express()

api.use(express.json())
api.use(express.urlencoded({ extended: true }))
api.use(cors({ origin: /http:\/\/(127(\.\d){3}|localhost)/ }))
api.options('*', () => cors())

api.use('/api/tasks', router)
api.use(errorHandler)

api.listen(port, () => {
    console.log(`listening on port ${port}`)
})
