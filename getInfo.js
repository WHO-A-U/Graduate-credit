const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
require('dotenv').config();

const getInfo = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  const ID = process.env.ID;
  const PW = process.env.PW;
  console.log(ID);
  console.log(PW);
  await page.goto(
    'http://www.hongik.ac.kr/login.do?Refer=https://cn.hongik.ac.kr/stud/'
  );
  try {
    await page.evaluate(
      (id, pw) => {
        document.querySelector('input[name="USER_ID"]').value = id;
        document.querySelector('input[name="PASSWD"').value = pw;
      },
      ID,
      PW
    );
  } catch (e) {
    console.error(e);
  }
  let login = false;
  await page.click('.submit');
  await page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    if (
      dialog.message() ===
      `ID, 비밀번호를 잘못 입력했거나 등록되지 않은 ID입니다. 확인 후 다시 입력해주세요. 직원,조교는 2015. 1. 20부터 ID를 이메일 ID로 입력해주세요`
    ) {
      console.log('!!!');
      login = false;
    } else {
      login = true;
    }
    await dialog.dismiss();
  });
  await page.waitForNavigation();
  await page.goto('https://cn.hongik.ac.kr/stud/');
  await page.waitFor(300);
  await page.goto('https://cn.hongik.ac.kr/stud/E/04000/04000.jsp');
  await page.click('input[name="dept"]');
  await page.click('input[type="submit"]');
  await page.waitFor(100);
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
        subjectEng: $(this).find('td:nth-child(3)').text(),
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

    await console.log(ulList);
    await console.log('now condition');
    await console.log(ulList2);
  } catch (error) {
    console.error(error);
    return;
  } finally {
    await page.close();
    await browser.close();
  }
};
module.exports = getInfo;
