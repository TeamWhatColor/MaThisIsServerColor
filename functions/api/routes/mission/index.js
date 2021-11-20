const express = require('express');
const router = express.Router();

router.get('/:id', require('./missionIdGET'));

module.exports = router;
