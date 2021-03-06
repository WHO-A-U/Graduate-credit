const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");
const moment = require("moment");
const getHtml = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

const urls = [];
for (let i = 1; i <= 3; i++) {
  urls.push({
    url: `https://www.hongik.ac.kr/front/boardlist.do?currentPage=${i}&menuGubun=1&siteGubun=1&bbsConfigFK=2&searchField=ALL&searchValue=&searchLowItem=ALL`,
    section: 1,
  });
}

for (let i = 1; i <= 3; i++) {
  urls.push({
    url: `https://www.hongik.ac.kr/front/boardlist.do?currentPage=${i}&menuGubun=1&siteGubun=1&bbsConfigFK=3&searchField=ALL&searchValue=&searchLowItem=ALL`,
    section: 2,
  });
}

urls.push({
  url: `https://www.hongik.ac.kr/front/boardlist.do?bbsConfigFK=54&siteGubun=1&menuGubun=1`,
  section: 3,
});

for (let i = 1; i <= 3; i++) {
  urls.push({
    url: `https://www.hongik.ac.kr/front/boardlist.do?currentPage=${i}&menuGubun=1&siteGubun=1&bbsConfigFK=170&searchField=ALL&searchValue=&searchLowItem=ALL`,
    section: 4,
  });
}

for (let i = 1; i <= 3; i++) {
  urls.push({
    url: `https://www.hongik.ac.kr/front/boardlist.do?currentPage=${i}&menuGubun=1&siteGubun=1&bbsConfigFK=6&searchField=ALL&searchValue=&searchLowItem=ALL`,
    section: 5,
  });
}

exports.initTable = (req, res, next) => {
  const info = async () => {
    let all = [];

    for (let k = 0; k < urls.length; k++) {
      await getHtml(urls[k].url).then((html) => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $(
          "body > div > div > div:nth-child(3) > div > table > tbody"
        ).children("tr");
        $bodyList.each(function (i, elem) {
          ulList[i] = {
            title: $(this).find("div.subject span").text(),
            url: "www.hongik.ac.kr" + $(this).find("a").attr("href"),
            date: moment($(this).find("td:nth-child(5)").text(), "YYYY.MM.DD"),
            section: urls[k].section,
          };
        });
        all = all.concat(ulList);
        const data = ulList.filter((n) => n.title);
        return data;
      });
    }
    all = all.filter((key, idx) => {
      for (let i = idx + 1; i < all.length; i++) {
        if (key.title === all[i].title) return false;
      }
      return true;
    });

    all.forEach(async (x) => {
      try {
        const tmp = await db.Information.findOne({
          where: { title: x.title },
        });
        if (tmp === null) {
          await db.Information.findOrCreate({
            where: {
              title: x.title,
              url: x.url,
              date: x.date,
              section: parseInt(x.section, 10),
            },
          });
        }
      } catch (e) {
        console.error(e);
      }
    });
  };
  info();
  next();
};
