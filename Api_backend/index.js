
const express = require('express');
var cors = require('cors')
const app = express()

app.use(cors());

const port = 3001

app.get('/', (req, res) => {
    res.json([
        {
            title: "Hello World 1",
        },
        {
            title: "Hello World 2",
        },
        {
            title: "Hello World 3",
        },
        {
            title: "Hello World 4",
        },
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})