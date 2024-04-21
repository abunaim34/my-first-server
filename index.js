const express = require('express');
const app = express();
const port = 5000;

app.get('/', (rep, res) => {
    res.send('Hello from my first ever server')
})
app.get('/data', (rep, res) => {
    res.send('More Data coming soon')
})

app.listen(port, () => {
    console.log(`My first server is running on port: ${port}`);
})