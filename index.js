const express = require("express")

const app = express()

const PORT = 4000

app.get("/", (req, res) => {
    res.status(200).send("Hello, Vandit")
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})