const { restart } = require('nodemon');
const Activity = require('./activities.model');

const getAllActivities = async (req, res, next) => {
  try {
    const allActivities = await Activity.find();
    return res.status(200).json(allActivities);
  } catch (error) {
    return next(error);
  }
};

const getActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findById(id);
    if (activity) return res.status(200).json(activity);
    else return res.status(404).json('Actividad no encontrado');
  } catch (error) {
    return next(error);
  }
};

const postActivity = async (req, res, next) => {
  try {
    const newActivity = new Activity(req.body);
    const createActivity = await newActivity.save();
    const point = req.params.points;
    if (point % 5 == 0 && point <= 15) {
      return res.status(201).json(createActivity);
    } else {
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
};

const putActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const activity = new Activity(req.body);
    const point = req.params.points;
    activity._id = id;
    const updateActivity = await Activity.findByIdAndUpdate(id, activity); //Before: findByIdAndDelete(id), now: findByIdAndUpdate(id)
    if (point % 5 == 0 && point <= 15) {
      return res.status(200).json(updateActivity);
    } else {
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
};

const deleteActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const activityDb = await Activity.findByIdAndDelete(id); //Before: findByIdAndDelete(id), now: findByIdAndUpdate(id)
    return res.status(200).json(activityDb);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllActivities,
  getActivity,
  postActivity,
  putActivity,
  deleteActivity,
};
