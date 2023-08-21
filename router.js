const express = require('express');
const ctrl = require('./firstController');
const router = express.Router();

router.get('/allData', ctrl.getData);

router.get('/dataById',ctrl)

module.exports = router;