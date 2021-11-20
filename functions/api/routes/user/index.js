const express = require('express');
const router = express.Router();

router.get('/test', require('./test'));
router.get('/:id', require('./userIdGET'));
router.post('/', require('./userPOST'));

module.exports = router;
