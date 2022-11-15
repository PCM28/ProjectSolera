const mongoose = require('mongoose');
const Activity = require('../../api/activities/activities.model');
const db = require("../database/database");
const initialActivities = [
    {
        name: 'Javascript',
        point: 10,
    },
    {
        name: 'React.js',
        point: 10,
    }
];
 
mongoose
.connect(db.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async()=>{
    const allActivities = await Activity.find();
    if(allActivities.length){
        console.log('Eliminando colección de activities...');
        await Activity.collection.drop();
    } else console.log('No hay activities en la base de datos... procediendo a añadir las activities');
})
.catch(error=>console.log('Error al borrar la colleción de la base de datos', error))
.then(async()=>{
    await Activity.insertMany(initialActivities);
    console.log('Activities añadidos con éxito...');
})
.catch(error=> console.log('Error al añadir activities a la base de datos', error))
.finally(()=> mongoose.disconnect());
// IMPORTANTE: SIEMPRE AÑADIR EL SCRIPT 'npm run seed-(NOMBRE DE LA SEMILLA)' en el PACKAGE.JSON
//Lección: PROYECTO -> "seed-activity": "node ./src/utils/seeds/activity.seed.js"
  