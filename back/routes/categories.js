const express = require('express');
const db = require('../models');
const { initTable } = require('./initmiddleware');

const router = express.Router();

router.get('/', initTable, async (req, res, next) => {
  const notice = await db.SubParent.findAll({
    include: [
      {
        model: db.SubChild,
        as: 'sub',
        attributes: ['id', 'name']
      }
    ],
    attributes: ['id', 'name']
  });
  const board = await db.Category.findAll({
    attributes: ['id', 'name'],
    raw: true
  });
  const Board_table = await db.Board.findAll({
    attributes: ['id', 'name'],
    raw: true
  });
  board.map(x => {
    x.sub = Board_table;
  });
  const entire = { notice: notice, board: board };
  return res.json(entire);
});

module.exports = router;
