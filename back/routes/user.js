const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./loginmiddleware');
const bodyParser = require('body-parser').json();
const router = express.Router();

router.get('/', (req, res) => {
  //추후에 isLoggedIn 붙여주기
  //
  const user = Object.assign({}, req.user.toJSON());
  delete user.password;
  return res.json(user);
}); //정보 알아오기
router.post('/', async (req, res, next) => {
  ///회원가입 인데 학번이랑 클래스넷 비밀번호를 받아와서 학교서버접속 인증을 구현해야함
  //클래스넷 비밀번호는 DB에 저장하면 안됨
  try {
    console.log('테스트시작');
    console.log(req.body);
    console.log('테스트끝');
    const exUser = await db.User.findOne({
      where: {
        login_id: req.body.login_id,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    //그냥  아이디 패스워드가 오면  중간에 다 털림
    //무조건 https 이용해야됨
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      login_id: req.body.login_id,
      password: hashedPassword,
      email: req.body.email,
      student_id: req.body.student_id,
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});
router.get('/:id', async (req, res, next) => {
  //특정 유저 정보만 가져오기
  try {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!1');
    console.log('사용자 id number:', parseInt(req.params.id, 10));
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!1');
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) },
      include: [
        {
          model: db.Post,
          as: 'Posts',
          attributes: ['id'],
        },
      ],
      attributes: ['login_id', 'nickname', 'email', 'student_id'],
    });
    const jsonUser = user.toJSON();
    jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0; //글쓴거 개수
    res.json(jsonUser);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
router.delete('/', (req, res) => {}); //탈퇴
router.patch('/', (req, res) => {}); //특정 개인정보 변경
router.get('/:id/posts', async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      where: { UserId: parseInt(req.params.id, 10) },
      include: [
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
    return res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
}); //특정 유저가 쓴 글
router.post('/login', (req, res) => {}); //로그인 + passport(local 전략) auth 절차 거치기
//로그인

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout 성공');
}); //로그아웃

module.exports = router;
