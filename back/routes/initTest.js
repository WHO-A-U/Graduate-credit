const express = require('express');
const db = require('../models');
const router = express.Router();
const { initTable } = require('./initInfo.test');

router.get('/', initTable, (req, res) => {
  return res.json('init test success');
});

module.exports = router;
