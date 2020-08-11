const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./loginmiddleware');

const router = express.Router();

router.post('/', async (req, res, next) => {
  //내가 글쓰기   로그인 확인 관련 미들웨어를 장착해주어야됨
  try {
    const newPost = await db.Post.create({
      title: req.body.title,
      description: req.body.description,
      UserId: req.body.UserId,
      anonymous: req.body.anonymous,
      CategoryId: req.body.CategoryId,
      BoardId: req.body.BoardId,
    });
    console.log(newPost);
    return res.status(200).json(newPost);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

router.post('/images', (req, res) => {}); //이미지 뭐시기 ---- 잘못 생각한 것이다 이렇게 라우터로 만들어주면 안됨 미들웨어로 만들어서 게시글 자체의 post메소드를 꾸며주어야함

//이것은  multer로  따로 함수를 만들어놓는다
//미들웨어로써 역할을 할 함수를 만들어주어야 된다

router.get('/:id', async (req, res, next) => {
  try {
    const Post = await db.Post.findOne({
      where: { id: parseInt(req.params.id) },
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname', 'email', 'student_id', 'createdAt'],
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
    return res.json(Post);
  } catch (e) {
    console.error(e);
    return next(e);
  }
}); //특정 글 가져오기

router.delete('/:id', async (req, res, next) => {
  //로그인 구현 미들웨어 추가하기
  //댓글이 달렸을 경우 삭제 못함!!!!!!! 추가하기

  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id },
    });
    if (!post) {
      return res.status(404).send('post is doesnt exist!!');
    }
    await db.Post.destroy({ where: { id: req.params.id } });
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    return next(e);
  }
}); //글 삭제 + 로그인 구현 미들웨어 붙여줄것

router.get('/:id/comments', (req, res) => {}); //특정 글에 달린 모든댓글 가져오기

router.post('/:id/comments/:userId', async (req, res, next) => {
  //일단 parmas 로 userid 를 받는 형시긍로 구현하였음
  //원래는 로그인 미들웨어를 이용하여 req.user.id 로 접근하도록 한다
  //특정 글에 댓글 추가하기
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const newComment = await db.Comment.create({
      PostId: post.id,
      UserId: req.params.userId,
      description: req.body.description,
    });
    await post.addComment(newComment.id);
    const comment = await db.Comment.findOne({
      where: {
        id: newComment.id,
      },
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
        },
      ],
    });
    console.log(req.body);
    return res.json(comment);
  } catch (e) {
    console.error(e);
    return next(e);
  }
}); //특정 글에 댓글 추가하기
router.patch('/:id/comments', (req, res) => {}); //특정 댓글 수정
router.post('/:id/like', (req, res) => {}); //좋아요
router.delete('/:id/like', (req, res) => {}); //좋아요취소

module.exports = router;
