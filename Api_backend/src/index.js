
const express = require("express");
const cors = require("cors");
const { accountRouter } = require('./routes/account.route');

const app = express()

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

app.use("/accounts", accountRouter);

// app.get("/account", (req,res) => {

// }),

// app.post("/account", (req,res) => {

// }),


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// app.get('/', (req, res) => {
//     res.json([
//         {
//             title: "Hello World 1",
//         },
//         {
//             title: "Hello World 2",
//         },
//         {
//             title: "Hello World 3",
//         },
//         {
//             title: "Hello World 4",
//         },
//         {
//             title: "Hello World 5",
//         },
//     ])
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })