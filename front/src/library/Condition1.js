module.exports = function condition1func(myHistory, myGraduateInfo) {
  const retval = {};
  retval['generalEletive'] =
    parseInt(
      myGraduateInfo.find((x) => x.subject === '기본/소양/교양 계').degree,
      10
    ) >= 23
      ? true
      : false;
  if (
    parseInt(myGraduateInfo.find((x) => x.subject === '수학').degree, 10) >
    parseInt(
      myGraduateInfo.find((x) => x.subject === '졸업인정학점').degree,
      10
    )
  )
    retval['generalEletiveWarning'] = true;
  else retval['generalEletiveWarning'] = false;

  const tmp = {};
  tmp['M'] =
    parseInt(myGraduateInfo.find((x) => x.subject === '수학').degree, 10) >= 9
      ? true
      : false;
  tmp['S'] =
    parseInt(myGraduateInfo.find((x) => x.subject === '과학').degree, 10) >= 9
      ? true
      : false;
  const science = {
    '대학물리(1)': false,
    '대학물리실험(1)': false,
    '대학화학(1)': false,
    '대학화학실험(1)': false,
    '대학물리(2)': false,
    '대학물리실험(2)': false,
    '대학화학(2)': false,
    '대학화학실험(2)': false,
  };

  myHistory.map((x) => {
    if (science.hasOwnProperty(x.subject)) {
      science[x.subject] = true;
    }
  });
  if (
    !(
      science['대학물리(1)'] &&
      science['대학물리실험(1)'] &&
      science['대학화학(1)'] &&
      science['대학화학실험(1)'] &&
      ((science['대학물리(2)'] && science['대학물리실험(2)']) ||
        (science['대학화학(2)'] && science['대학화학실험(2)']))
    )
  )
    tmp['S'] = false;
  tmp['C'] =
    myHistory.filter((x) =>
      ['정보시스템개론', '객체지향프로그래밍', 'C-프로그래밍'].includes(
        x.subject
      )
    ).length >= 2
      ? true
      : false;
  retval['MSC'] = tmp;
  retval['science'] = science;
  retval['majorEnglish'] = myHistory.filter((x) =>
    x.subject.includes('전공기초영어')
  ).length
    ? true
    : false;
  const dragonBall16 = {
    일교1: ['언어와 철학'],
    일교2: ['사회와 경제'],
    일교3: ['역사와 문화'],
    일교4: ['예술과 디자인'],
    일교5: ['제2외국어와 한문'],
    핵교6: ['법과 생활'],
    핵교7: ['공학의 이해'],
  };
  myHistory.map((x) => {
    if (x.section in dragonBall16) {
      dragonBall16[x.section].push(x.subject);
    }
  });

  retval[`dragonBall16`] = dragonBall16;
  const dragonBall16List = Object.keys(dragonBall16);

  const e = dragonBall16List.map((x) => {
    if (dragonBall16[x].length > 1) return true;
    return false;
  });

  let i = 0;

  e.map((x) => {
    if (x === true) i += 1;
  });

  if (
    i >= 6 &&
    dragonBall16['일교4'].length() > 1 &&
    dragonBall16['일교5'].length() > 1
  )
    retval['dragonBall16Warning'] = false;
  else retval['dragonBall16Warning'] = true;
  return retval;
};

// ※ 컴퓨터공학전공 학생은 다음의 MSC 전산 3과목<정보시스템개론,객체지향프로그래밍,C-프로그래밍) 중 6학점을 이수해야 함.
// ※ 산업공학전공 학생은 다음의 MSC 전산 3과목<정보시스템개론,웹프로그래밍,C-프로그래밍) 중 6학점을 이수해야 함.
