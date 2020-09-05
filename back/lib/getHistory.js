require("dotenv").config();
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const getHistory = async (classnet, classnetPW, admissionYear) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  // const naver_id = process.env.ID;
  // const naver_pw = process.env.PW;
  await page.goto(
    "https://www.hongik.ac.kr/login.do?Refer=https://cn.hongik.ac.kr/stud/"
  );
  await page.evaluate(
    (id, pw) => {
      document.querySelector('input[name="USER_ID"]').value = id;
      document.querySelector('input[name="PASSWD"').value = pw;
    },
    classnet,
    classnetPW
  );

  await page.click(".submit");
  await page.on("dialog", async (dialog) => {
    await dialog.dismiss();
  });
  await page.waitForNavigation();
  await page.goto("https://cn.hongik.ac.kr/stud/");
  await page.waitFor(2000);
  await page.goto("https://cn.hongik.ac.kr/stud/E/04000/04000.jsp");
  await page.click('input[name="dept"]');
  await page.click('input[type="submit"]');
  await page.waitFor(2000);
  try {
    const html = await page.evaluate(
      "new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML"
    );

    let ulList = [];
    const $ = await cheerio.load(html);
    const $tables = await $("table.mato5 >  tbody");
    await $tables.each(function (i, elem) {
      const $tds = $(elem).children("tr");
      const tmpList = [];
      let flag = true;
      $tds.each((j, idx) => {
        if (
          $(idx).find("td:nth-child(1)").text().indexOf("학기재수강") !== -1
        ) {
          flag = false;
        }
        const retry = $(idx).find("td:nth-child(6)").text();
        const tmp = {
          number: $(idx).find("td:nth-child(1)").text(),
          subject: $(idx).find("td:nth-child(2)").text(),
          section: $(idx).find("td:nth-child(3)").text(),
          degree: $(idx).find("td:nth-child(4)").text(),
          grade: $(idx).find("td:nth-child(5)").text(),
        };
        if (tmp["grade"] !== "" && retry !== "재수강") tmpList.push(tmp);
      });
      if (flag) {
        ulList = ulList.concat(tmpList);
      }
    });
    ulList = await ulList.filter((n) => n.subject);
    let ulList2 = [];
    const $condition = await $("div.table0.mato10 > table > tbody").children(
      "tr"
    );
    await $condition.each(function (i, elem) {
      if (i === 0 || i === 13) {
        ulList2[i] = {
          subject: $(this).find("td:nth-child(2)").text(),
          degree: $(this).find("td:nth-child(3)").text(),
        };
      } else {
        ulList2[i] = {
          subject: $(this).find("td:nth-child(1)").text(),
          degree: $(this).find("td:nth-child(2)").text(),
        };
      }
      if (i > 23) return false;
    });

    ulList = ulList.filter((x) => x.grade !== "");
    ulList = {
      subject: ulList,
      info: ulList2,
    };
    return ulList;
  } catch (error) {
    console.error(error);
    return;
  } finally {
    await page.close();
    await browser.close();
  }
};

module.exports = getHistory;
