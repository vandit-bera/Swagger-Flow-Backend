const express = require("express")

const app = express()

// Swagger api
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml');
const fileUpload = require('express-fileupload')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
app.use(fileUpload())

const PORT = 4000

let courses = [
    {
        id: "1",
        name: "ReactJS",
        price: 299
    },
    {
        id: "2",
        name: "SwaggerAPI",
        price: 399
    },
    {
        id: "3",
        name: "AngularJS",
        price: 499
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Hello, Vandit")
})

app.get("/api/v1/test", (req, res) => {
    res.status(200).send("Hello from /api/v1/test")
})

app.get("/api/v1/testobject", (req, res) => {
    res.status(200).send({ id: "1", name: "NextJS", price: "1000" })
})

app.get("/api/v1/courses", (req, res) => {
    res.status(200).send(courses)
})

app.get("/api/v1/mycourses/:courseId", (req, res) => {
    const myCourses = courses.find((course) => course.id === req.params.courseId)
    res.status(200).send(myCourses)
})

app.post("/api/v1/addcourse", (req, res) => {
    console.log(req.body)
    courses.push(req.body)
    res.status(200).send(true)
})

app.get("/api/v1/coursequery", (req, res) => {
    let location = req.query.location
    let device = req.query.device
    res.status(200).send({ location, device })
})

app.post("/api/v1/courseupload", (req, res) => {
    console.log(req.headers)
    const file = req.files.filename
    let path = __dirname + "/images/" + Date.now() + ".jpg"
    file.mv(path, (err) => {
        res.send(true)
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})