const express = require('express');
const router = express.Router();

router.get('/test', require('./test'));
router.post('/', require('./userPOST'));
router.get('/:id', require('./userIdGET'));

module.exports = router;
