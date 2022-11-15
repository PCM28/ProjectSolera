const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        name:{type: String, required: true},
        point:{type: Number, required: true},
    },{
        timestamps: true,
    });

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;