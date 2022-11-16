const { restart } = require("nodemon");
const Team = require("./teams.model");

const getAllTeams = async (req, res, next) => {
  try {
    const allTeams = await Team.find().populate("activities");
    return res.status(200).json(allTeams);
  } catch (error) {
    return next(error);
  }
};

const getTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id).populate("activities");
    if (team) return res.status(200).json(team);
    else return res.status(404).json("Team no encontrado");
  } catch (error) {
    return next(error);
  }
};

const postTeam = async (req, res, next) => {
  try {
    const newTeam = new Team(req.body);
    const createTeam = await newTeam.save();
    return res.status(201).json(createTeam);
  } catch (error) {
    return next(error);
  }
};

const putTeam = async (req, res, next) => {
  try {
    const id = req.params.id;
    const team = new Team(req.body);
    team._id = id;
    const updateTeam = await Team.findByIdAndUpdate(id, team); //Before: findByIdAndDelete(id), now: findByIdAndUpdate(id)
    return next(updateTeam);
  } catch (error) {
    return next(error);
  }
};

const deleteTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const teamDb = await Team.findByIdAndDelete(id); //Before: findByIdAndDelete(id), now: findByIdAndUpdate(id)
    return res.status(200).json(teamDb);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllTeams,
  getTeam,
  postTeam,
  putTeam,
  deleteTeam,
};
