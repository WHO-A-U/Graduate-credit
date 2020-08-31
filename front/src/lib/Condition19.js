module.exports = function condition19(myHistory, myGraduateInfo) {
  console.log('Condition 19');
  const state = {
    이수요건: {
      전문교양: {
        qualify: 0,
      },
      MSC: {
        qualify: 0,
      },
      전공기초영어: {
        qualify: 0,
      },
      전공: {
        qualify: 0,
      },
      이수학점: {
        qualify: 0,
      },
    },
    전공기초영어: {
      qualify: 0,
    },
    전문교양: {
      기초교양: {
        글쓰기: 0,
        영어: 0,
      },
      필수영역: {
        //예술과디자인or제2외국어
        qualify: 0,
      },
      드래곤볼: {
        //필수영역을 만족하면서 7개 영역중 6개 클리어
        qualify: 0,
      },
    },
    특성화교양: {
      qualify: 0,
    },
    MSC: {
      과학: {
        qualify: 0,
      },
      수학: {
        qualify: 0,
      },
      과학조건: {
        qualify: 0,
      },
    },
  };

  const mySubjects = myHistory.map((x) => x.subject);

  const 전문교양 = parseInt(
    myGraduateInfo.find((x) => x.subject === '기본/소양/교양 계').degree,
    10
  );
  if (전문교양 >= 23) {
    state['이수요건']['전문교양']['qualify'] = 0;
  } else {
    state['이수요건']['전문교양']['qualify'] = 23 - 전문교양;
  }

  const MSC = parseInt(
    myGraduateInfo.find((x) => x.subject === '심화과정 MSC인정학점').degree,
    10
  );
  if (MSC >= 18) {
    state['이수요건']['전문교양']['qualify'] = 0;
  } else {
    state['이수요건']['전문교양']['qualify'] = 18 - MSC;
  }
  //   const 특성화교양 = parseInt(
  //     myGraduateInfo.find((x) => x.subject === '특성화교양').degree,
  //     10
  //   );
  //   if (특성화교양 >= 3) {
  //     state['이수요건']['특성화교양']['qualify'] = 0;
  //   } else {
  //     state['이수요건']['특성화교양']['qualify'] = 3 - 특성화교양;
  //   }

  if (
    mySubjects.includes('디자인씽킹') ||
    mySubjects.includes('창업과 실용법률')
  ) {
    state['이수요건']['특성화교양'] = 0;
  } else {
    state['이수요건']['특성화교양'] = 1;
  }

  if (
    mySubjects.includes('전공기초영어(Ⅰ)') ||
    mySubjects.includes('전공기초영어(Ⅱ)')
  ) {
    state['이수요건']['전공기초영어']['qualify'] = 0;
    state['전공기초영어']['qualify'] = 0;
  } else {
    state['이수요건']['전공기초영어']['qualify'] = 3;
    state['전공기초영어']['qualify'] = 3;
  }

  const 전공학점 = parseInt(
    myGraduateInfo.find((x) => x.subject === '전공').degree,
    10
  );

  if (전공학점 >= 50) {
    state['이수요건']['전공']['qualify'] = 0;
  } else {
    state['이수요건']['전공']['qualify'] = 50 - 전공학점;
  }

  // const 졸업인정학점 = parseInt(
  //   myGraduateInfo.find((x) => x.subject === '졸업인정학점').degree,
  //   10
  // );

  let 졸업인정학점;
  myGraduateInfo.map((x) => {
    if (x.subject === '졸업인정학점') {
      졸업인정학점 = x.degree;
    }
  });

  if (졸업인정학점 >= 132) {
    state['이수요건']['이수학점']['qualify'] = 0;
  } else {
    state['이수요건']['이수학점']['qualify'] = 132 - 졸업인정학점;
  }

  const dragonBall = {
    일교1: false, //언어와 철학
    일교2: false, //사회와 경제
    일교3: false, //역사와 문화
    일교4: false, //예술과 디자인
    일교5: false, //제2외국어와 한문
    핵교6: false, //법과 생활
    핵교7: false, //공학의 이해
  };

  myGraduateInfo.map((x) => {
    switch (x.subject) {
      case '일교1':
        dragonBall['일교1'] = x.degree > 0 ? 0 : 1;
        break;
      case '일교2':
        dragonBall['일교2'] = x.degree > 0 ? 0 : 1;
        break;
      case '일교3':
        dragonBall['일교3'] = x.degree > 0 ? 0 : 1;
        break;
      case '일교4':
        dragonBall['일교4'] = x.degree > 0 ? 0 : 1;
        break;
      case '일교5':
        dragonBall['일교5'] = x.degree > 0 ? 0 : 1;
        break;
      case '핵교6':
        dragonBall['핵교6'] = x.degree > 0 ? 0 : 1;
        break;
      case '핵교7':
        dragonBall['핵교7'] = x.degree > 0 ? 0 : 1;
        break;
      default:
        break;
    }
  });

  myHistory.map((x) => {
    if (
      x.subject.indexOf('논리적사고와글쓰기') != -1 ||
      x.subject.indexOf('공학글쓰기') != -1
    ) {
      state['전문교양']['기초교양']['글쓰기'] = 0;
    }
    if (x.subject === '영어') {
      state['전문교양']['기초교양']['영어'] = 1;
    }
  });

  state['전문교양']['필수영역']['qualify'] =
    dragonBall['일교4'] === 0 || dragonBall['일교5'] === 0 ? 0 : 1;

  if (
    state['전문교양']['필수영역']['qualify'] &&
    Object.keys(dragonBall).filter((x) => dragonBall[x]).length >= 6
  ) {
    state['전문교양']['드래곤볼']['qualify'] = 0;
  } else {
    state['전문교양']['드래곤볼']['qualify'] = 1;
  }

  const scienceScore = parseInt(
    myGraduateInfo.find((x) => x.subject === '과학').degree,
    10
  );
  if (scienceScore >= 9) {
    state['MSC']['과학'] = 0;
  } else {
    state['MSC']['과학'] = 9 - scienceScore;
  }

  const mathScore = parseInt(
    myGraduateInfo.find((x) => x.subject === '수학').degree,
    10
  );

  if (mathScore >= 9) {
    state['MSC']['수학'] = 0;
  } else {
    state['MSC']['수학'] = 9 - mathScore;
  }

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
    if (Object.prototype.hasOwnProperty.call(science, x.subject)) {
      science[x.subject] = true;
    }
    // if (science.hasOwnProperty(x.subject)) {
    //   science[x.subject] = true;
    // }
  });

  if (
    science['대학물리(1)'] &&
    science['대학물리실험(1)'] &&
    science['대학화학(1)'] &&
    science['대학화학실험(1)'] &&
    ((science['대학물리(2)'] && science['대학물리실험(2)']) ||
      (science['대학화학(2)'] && science['대학화학실험(2)']))
  ) {
    state['MSC']['과학조건'] = 0;
  } else {
    state['MSC']['과학조건'] = 1;
  }
  return state;
};

// ※ 컴퓨터공학전공 학생은 다음의 MSC 전산 3과목<정보시스템개론,객체지향프로그래밍,C-프로그래밍) 중 6학점을 이수해야 함.
// ※ 산업공학전공 학생은 다음의 MSC 전산 3과목<정보시스템개론,웹프로그래밍,C-프로그래밍) 중 6학점을 이수해야 함.
