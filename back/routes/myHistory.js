const express = require("express");
const router = express.Router();
require("dotenv").config();
const puppeteer = require("puppeteer");
const getHistory = require("../lib/getHistory");
const cheerio = require("cheerio");

router.post("/", async (req, res) => {
  console.log(
    "========================this is getHistory entry========================"
  );
  //아이디와 비밀번호 받는 과정
  //잘못된 정보를 준 경우 ex) 비밀번호나 아이디가 잘못됨
  const classnet = req.body.classnet;
  const classnetPW = req.body.classnetPass;
  console.log("여기서 백딴 입니다!!!!!!");
  console.log(classnet);
  console.log(classnetPW);
  try {
    const tmp = await getHistory(classnet, classnetPW);
    console.log(tmp);
    return res.json(tmp);
  } catch (e) {
    //  http 상태와 로그로 출력한다
    console.error(e);
    return res.json('fail');
  }
});
module.exports = router;
