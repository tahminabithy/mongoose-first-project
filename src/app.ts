import express from 'express'
import cors from 'cors'
import { router } from './modules/student/student.route'
const app = express()

//parser
app.use(express.json())
app.use(cors())
//common route
app.use('/api/v1/students', router)


export default app