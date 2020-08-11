const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./loginmiddleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const Posts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          attributes: ['nickname', 'email', 'student_id'],
        },
        {
          model: db.Category,
          attributes: ['name'],
        },
        {
          model: db.Board,
          attributes: ['name'],
        },
      ],
      attributes: [
        'id',
        'title',
        'description',
        'lock',
        'visit',
        'anonymous',
        'createdAt',
        'updatedAt',
      ],
    });
    res.json(Posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/notice', (req, res) => {}); //공지 페이지로 가기
router.get('/notice/:id', (req, res) => {}); //공지페이지 에서 세부항목보기
//id could be  1.학교공지 2.컴공과공지 3.클넷공지
router.get('/board', (req, res) => {}); //게시판 들어가면 글 불러오기
// router.get('/board/:category_id/:board_id', (req, res) => {}); //게시판 특정 카테고리 특정 보드 선택시 글 불러오기
router.get('/:id', async (req, res, next) => {
  try {
    const newboard = await db.Post.findAll({
      where: { CategoryId: parseInt(req.params.id, 10) },
    });
    return res.json(newboard);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = router;
