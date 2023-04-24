const express = require("express")

const app = express()

// Swagger api
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 4000

let course = [
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
        name: "AngulaJS",
        price: 499
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Hello, Vandit")
})

app.get("/api/v1/test", (req, res) => {
    res.status(200).send("Hello from /api/v1/test")
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})