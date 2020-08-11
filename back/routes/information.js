const express = require('express');
const db = require('../models');
const router = express.Router();
router.get('/:section', async (req, res, next) => {
  try {
    const NewInfo = await db.Information.findAll({
      where: { section: parseInt(req.params.section) },
      attributes: ['title', 'url', 'date', 'section'],
    });
    return res.json(NewInfo);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});
// router.get('/', initTable, async (req, res, next) => {
//   return res.json('sucess');
// });

module.exports = router;
