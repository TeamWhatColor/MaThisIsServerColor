const express = require('express');
const router = express.Router();

router.get('/test', require('./test'));

module.exports = router;
