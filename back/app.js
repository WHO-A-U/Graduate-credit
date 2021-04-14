const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const db = require('./models');
const informationRouter = require('./routes/information');
const initTestRouter = require('./routes/initTest');
const myHistoryRouter = require('./routes/myHistory');
const { initTable } = require('./routes/initInfo.test');
const helmet = require('helmet');
const http = require('http');
dotenv.config();
const app = express();
db.sequelize.sync();

app.use(morgan('dev'));
app.use(helmet());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
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
}, 3600000);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.get('/', (req, res) => {
  res.send('success Test');
});
app.use('/api/myHistory', myHistoryRouter);
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
