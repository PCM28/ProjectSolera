const express = require('express');
const router = express.Router();
const {getAllActivities, getActivity, postActivity, putActivity, deleteActivity} = require('./activities.controller')

router.get('/', getAllActivities);
router.get('/:id', getAllActivities);
router.get('/new', getAllActivities);
router.get('/edit/:id', getAllActivities);
router.get('/delete/:id', getAllActivities);

module.exports = router;