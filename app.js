const express = require('express');
const app = express();

// GET, POST, PUT, PATCH, DELETE
app.get('/usuario', (req, res) => {

    res.send('Aeeeeee')
})


app.listen(7961, () => console.log('Servidorrr subuiuuuu'))