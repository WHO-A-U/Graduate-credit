const express = require('express');
const router = express.Router();
require('dotenv').config();
const puppeteer = require('puppeteer');

const cheerio = require('cheerio');
const getHistory = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  const naver_id = process.env.ID;
  const naver_pw = process.env.PW;
  await page.goto(
    'http://www.hongik.ac.kr/login.do?Refer=https://cn.hongik.ac.kr/stud/'
  );
  await page.evaluate(
    (id, pw) => {
      document.querySelector('input[name="USER_ID"]').value = id;
      document.querySelector('input[name="PASSWD"').value = pw;
    },
    naver_id,
    naver_pw
  );

  await page.click('.submit');
  await page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.dismiss();
  });
  await page.waitForNavigation();
  await page.goto('https://cn.hongik.ac.kr/stud/');
  await page.waitFor(100);
  await page.goto('https://cn.hongik.ac.kr/stud/E/04000/04000.jsp');
  await page.click('input[name="dept"]');
  await page.click('input[type="submit"]');
  await page.waitFor(200);
  try {
    const html = await page.evaluate(
      'new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML'
    );

    let ulList = [];
    const $ = await cheerio.load(html);
    const $tables = await $('table.mato5 >  tbody').children('tr');
    await $tables.each(function (i, elem) {
      ulList[i] = {
        number: $(this).find('td:nth-child(1)').text(),
        subject: $(this).find('td:nth-child(2)').text(),
        section: $(this).find('td:nth-child(3)').text(),
        degree: $(this).find('td:nth-child(4)').text(),
        grade: $(this).find('td:nth-child(5)').text(),
      };
    });
    ulList = await ulList.filter((n) => n.subject);
    let ulList2 = [];
    const $condition = await $('div.table0.mato10 > table > tbody').children(
      'tr'
    );
    await $condition.each(function (i, elem) {
      if (i === 0 || i === 13) {
        ulList2[i] = {
          subject: $(this).find('td:nth-child(2)').text(),
          degree: $(this).find('td:nth-child(3)').text(),
        };
      } else {
        ulList2[i] = {
          subject: $(this).find('td:nth-child(1)').text(),
          degree: $(this).find('td:nth-child(2)').text(),
        };
      }
      if (i > 23) return false;
    });

    // console.log(ulList);
    // console.log('now condition');
    // console.log(ulList2);
    ulList = ulList.concat(ulList2);
    return ulList;
  } catch (error) {
    console.error(error);
    return;
  } finally {
    await page.close();
    await browser.close();
  }
};
router.get('/', async (req, res) => {
  console.log('this is getHistory entry');
  const tmp = await getHistory();
  return res.json(tmp);
});
module.exports = router;
