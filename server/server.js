const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./src/utils/database/database');
const activitiesRoutes = require('./src/api/activities/activities.routes')
dotenv.config();
db.connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use(cors({
    origin: '*',
    credentials: true
}))

const PORT = process.env.PORT || 8000;

// app.listen(PORT, ()=>{
//     console.log(`el servidor está reaaaady mann en http://localhost:${PORT}`);
// })

app.get('/', (req, res)=>{
    res.end('Welcome to the server boss... running...');
})

app.use('/Activity', activitiesRoutes);

app.listen(PORT,()=>{
    console.log(`db: ${process.env.DB_URL}`);
    console.log(`El servidor está reaaaady mann en http://localhost:${PORT}`);
})