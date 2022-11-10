const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send(`<h1>It is my Second Node.js Assignment ,add /api/main</h1>`)
    res.end()
})

app.get('/api/main', (req, res) => {
    res.send(`<h2>Here the page is inside api route</h2>`)
    res.end();
})

app.listen(3000, () => {
    console.log("App is running");
})
