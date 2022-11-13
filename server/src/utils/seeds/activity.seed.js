const mongoose = require('mongoose');
const Activity = require('../../api/activities/activity.model');

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
            
        }
    })