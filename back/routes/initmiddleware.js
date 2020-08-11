const db = require('../models');
exports.initTable = (req, res, next) => {
  db.SubParent.findOrCreate({
    where: { name: '학과공지' }
  });
  db.SubParent.findOrCreate({
    where: { name: '교내공지' }
  });
  db.SubParent.findOrCreate({
    where: { name: '클래스넷 공지' }
  });
  db.SubChild.findOrCreate({
    where: { name: '학과(학과)', SubParentId: 1 }
  });
  db.SubChild.findOrCreate({
    where: { name: '취업인턴', SubParentId: 1 }
  });
  db.SubChild.findOrCreate({
    where: { name: '수업/프로젝트', SubParentId: 1 }
  });
  db.SubChild.findOrCreate({
    where: { name: 'SCSC', SubParentId: 1 }
  });
  db.SubChild.findOrCreate({
    where: { name: '장학금', SubParentId: 1 }
  });
  db.SubChild.findOrCreate({
    where: { name: '코로나19', SubParentId: 2 }
  });
  db.SubChild.findOrCreate({
    where: { name: '일반공지', SubParentId: 2 }
  });
  db.SubChild.findOrCreate({
    where: { name: '학생공지', SubParentId: 2 }
  });
  db.SubChild.findOrCreate({
    where: { name: '교강사공지', SubParentId: 2 }
  });
  db.SubChild.findOrCreate({
    where: { name: '대학원공지', SubParentId: 2 }
  });
  db.SubChild.findOrCreate({
    where: { name: '행사/공모전', SubParentId: 2 }
  });
  db.SubChild.findOrCreate({
    where: { name: '보안공지', SubParentId: 2 }
  });
  db.SubChild.findOrCreate({
    where: { name: '입찰공고', SubParentId: 2 }
  });
  db.SubChild.findOrCreate({
    where: { name: '공지사항', SubParentId: 3 }
  });
  db.Board.findOrCreate({
    where: { name: '질문' }
  });
  db.Board.findOrCreate({
    where: { name: '정보' }
  });
  db.Category.findOrCreate({
    where: { name: '웹' }
  });
  db.Category.findOrCreate({
    where: { name: '앱' }
  });
  db.Category.findOrCreate({
    where: { name: '알고리즘' }
  });
  db.Category.findOrCreate({
    where: { name: '테이터 사이언스' }
  });
  db.Category.findOrCreate({
    where: { name: '임베디드' }
  });
  next();
};
