const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('console.log test js');
  //   try {
  //     const tmp = await db.Information.findOne({
  //       where: { title: '!@#!@#!@#@!#!@#@!#' },
  //       attributes: ['title', 'url', 'date', 'section'],
  //     });
  //     if (tmp === null) {
  //       console.log('@1@');
  //     } else {
  //       console.log('@2@');
  //     }
  //     return res.json(tmp);
  //   } catch (e) {
  //     console.error(e);
  //   }
  return res.json([
    { a: 1, b: 2 },
    { c: 3, d: 4 },
  ]);
});

module.exports = router;
