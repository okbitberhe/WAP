const express = require('express');
const app = express();

app.get('/', function(req, res) {
    let name = req.query.name;
    let age = req.query.age;

    if (!name) {
        name = 'person';
    }
    if (!age) {
        age = 'age';
    }

    res.send(`Welcome ${name}, with age of ${age}`);
});

const PORT= process.env.PORT || 3000;

app.listen(PORT,()=>{console.log(`server start at port ${PORT}`)});