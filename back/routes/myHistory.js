const express = require('express');
const router = express.Router();
const getHistory = require('../lib/getHistory');
require('dotenv').config();

router.post('/', async (req, res) => {
  const classnet = req.body.classnet;
  const classnetPW = req.body.classnetPass;
  try {
    const tmp = await getHistory(classnet, classnetPW);
    return res.json(tmp);
  } catch (e) {
    console.error(e);
    return res.json('fail');
  }
});

module.exports = router;
