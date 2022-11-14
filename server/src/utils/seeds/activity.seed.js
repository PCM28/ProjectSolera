const mongoose = require('mongoose');
const Activity = require('../../api/activities/activities.model');
const db = require("../database/database");
const initialActivities = [
    {
        name: 'Javascript',
        point: 10
    },
    {
        name: 'React.js',
        point: 10
    }
];

mongoose
    .connect(db.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async()=>{
        const allActivities = await Activity.find();
        if(allActivities.length){
            console.log('Eliminando colección de activities...')
            await Activity.collection.drop();
        } else console.log('No hay productos en la base de datos... procediendo a añadir las actividades')
    })
    .catch(error =>console.log('Error al borrar la colección de la base de datos', error))
    .then(async()=>{
        await Activity.insertMany(initialActivities);
        console.log('Productos añadidos con éxito...');
    })
    .catch(error=>console.log('Error al añadir actividades a la base de datos', error))
    .finally(()=> mongoose.disconnect());   