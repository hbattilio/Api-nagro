import express, { Express } from 'express';
import cors from "cors"
import createcourses from './controller/courses/createcourses'
import getallcourses from './controller/courses/getallcourses'
import getcoursesbyid from './controller/courses/getcoursesbyid'
import createstudent from './controller/students/createstudent'
import getallstudents from './controller/students/getallstudents'
import getstudentbyid from './controller/students/getstudentbyid'
import delstudentbyid from './controller/students/delstudentbyid'
import editstudentbyid from './controller/students/editstudentbyid'



const app: Express = express()
app.use(express.json())
app.use(cors())


app.post('/courses', createcourses)
app.get('/courses', getallcourses)
app.get('/courses/:id', getcoursesbyid)

app.post('/student', createstudent)
app.get('/student', getallstudents)
app.get('/student/:id', getstudentbyid )
app.delete('/student/:id', delstudentbyid)
app.put('/student/:id', editstudentbyid)



app.listen(3003, () => {
    console.log("Server running on port 3003")
})