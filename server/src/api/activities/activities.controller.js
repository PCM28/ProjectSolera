const {restart} = require('nodemon');
const Activity = require('./activities.model');

const getAllActivities = async (req, res, next) =>{
    try{
        const allActivities = await Activity.find();
        return res.status(200).json(allActivities);
    } catch(error){
        return res.status(500).json(error);
    }
}

const getActivity = async(req, res, next) =>{
    try{
        const id= req.params.id;
        const activity = await Activity.findById(id);
        if(activity) return res.status(200).json(activity);
        else return res.status(404).json('Actividad no encontrada');
    } catch(error){
        return res.status(500).json(error);
    }
}

const postActivity = async(req, res, next) =>{
    try{
        const newActivity = new Activity(req.body);
        const createActivity = await newActivity.sabe();
        return res.status(201).json(createActivity);
    }catch(error){
        return res.status(500).json(error);
    }
}

const putActivity = async(req, res, next)=>{
    try{
        console.log(req.params.id);
        const id = req.params.id;
        const activity = new Activity(req.body);
        activity._id=id;
        console.log(activity);
        const updateActivity = await Activity.findByIdAndDelete(id);
        return res.status(200).json(updateActivity);
    } catch(error){
        return res.status
    }
}

const deleteActivity = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const activityDb = await Activity.findByIdAndDelete(id);
    }catch(error){
        return res.status(500).json(error);
    }
}

module.exports = {getAllActivities, getActivity, postActivity, putActivity, deleteActivity}