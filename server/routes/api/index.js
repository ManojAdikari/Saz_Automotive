const express = require('express');
const router = express.Router();
const SelectData = require('./SelectData');
const InsertData = require('./InsertData');

router.use('/SelectData',SelectData);
router.use('/InsertData',InsertData);

module.exports = router;
