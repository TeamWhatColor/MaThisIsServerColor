const express = require('express');
const router = express.Router();

router.get('/:id', require('./mainIdGET'));

module.exports = router;
