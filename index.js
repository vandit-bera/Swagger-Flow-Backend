const express = require("express")

const app = express()

// Swagger api
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 4000

app.get("/", (req, res) => {
    res.status(200).send("Hello, Vandit")
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})