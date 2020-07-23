const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get(
      'http://www.hongik.ac.kr/front/boardlist.do?bbsConfigFK=54&siteGubun=1&menuGubun=1'
    );
  } catch (error) {
    console.error(error);
  }
};
const ComputerInfo = () => {
  getHtml()
    .then((html) => {
      let ulList = [];
      const $ = cheerio.load(html.data);
      const $bodyList = $(
        'body > div > div > div:nth-child(3) > div > table > tbody'
      ).children('tr');
      $bodyList.each(function (i, elem) {
        ulList[i] = {
          title: $(this).find('div.subject span').text(),
          url: 'www.hongik.ac.kr' + $(this).find('a').attr('href'),
          date: $(this).find('td:nth-child(5)').text(),
        };
      });

      const data = ulList.filter((n) => n.title);
      return data;
    })
    .then((res) => log(res));
};

module.exports = ComputerInfo;
