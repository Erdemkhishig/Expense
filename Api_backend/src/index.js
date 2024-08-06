
const express = require("express");
const cors = require("cors");
const { accountRouter } = require('./routes/account.route');
const { categoryRouter } = require('./routes/category.route');

const app = express()

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

app.use("/accounts", accountRouter);
app.use("/categories", categoryRouter);


// app.get("/account", (req,res) => {

// }),

// app.post("/account", (req,res) => {

// }),
const categories = [
   
];

// Endpoint to get categories
app.get('/categories', (req, res) => {
    res.json(categories);
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
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


  // { "id": "1", "title": "Home", "icon": "🏠" },
    // { "id": "2", "title": "Gift", "icon": "🎁" },
    // { "id": "3", "title": "Food", "icon": "🍔" },
    // {"id": "4", "title": "Drink", "icon": "🍹" },
    // {"id": "5", "title": "Vehicle", "icon": "🚗" },
    // {"id": "6", "title": "Shopping", "icon": "👕" }