const express = require('express');
const PORT = 5000;
const app = express();

app.listen(PORT, ()=>{
    console.log(`el servidor está reaaaady mann en http://localhost:${PORT}`);
})

app.get('/', (req, res)=>{
    res.end('Welcome to the server boss... running...');
})