const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const db = require('./models');
const testRouter = require('./routes/test');
const informationRouter = require('./routes/information');
const initTestRouter = require('./routes/initTest');
const myHistoryRouter = require('./routes/myHistory');
const { initTable } = require('./routes/initInfo.test');
dotenv.config(); //dotenv 파일 분석기
const app = express();
db.sequelize.sync(); //db와 연결된 sequelize 테이블 구조동기화
// app.use('/', indexRouter);

app.use(morgan('dev')); //이 서버로 오는 요청 req 의 로그를 찍어줌
app.use(express.urlencoded({ extended: true })); //http req 헤더 json 형식으로 parsing 해줌
app.use(express.json());
app.use(
  cookieParser(process.env.COOKIE_SECRET)
  // process.env.COOKIE_SECRET
);
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET, //jwt와 session을 동시에 사용하기 위한 옵션 설정 value는 임의문자열
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: '(로그인유지상태판단을위한쿠키)의 이름값',
  })
);
setInterval(() => {
  initTable(0, 0, () => {
    console.log('Crawling Info Data');
  });
}, 36000000);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
); //front 와 back 이 도메인이 다르기떄문에 생기는 문제 해결
//http 프로토콜은 브라우저를 거쳐야되는데 서버끼리 통신할떄는 필요함

app.get('/', (req, res) => {
  res.send('success Test');
});
app.use('/api/myHistory', myHistoryRouter);
app.use('/api/test', testRouter);
app.use('/api/information', informationRouter);
app.use('/api/initTest', initTestRouter);
app.use((req, res, next) => {
  const err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});

app.listen(3065, () => {
  console.log('3065 포트로 돌아가는중');
});
