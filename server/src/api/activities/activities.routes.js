const express = require('express');
const router = express.Router();
const {getAllActivities, getActivity, postActivity, putActivity, deleteActivity} = require('./activities.controller')

router.get('/', getAllActivities);
router.get('/:id', getActivity);
router.post('/new', postActivity);
router.put('/edit/:id', putActivity);
router.delete('/delete/:id', deleteActivity);

module.exports = router;