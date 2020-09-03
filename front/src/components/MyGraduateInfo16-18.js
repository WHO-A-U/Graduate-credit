import React from 'react';
import { curriculum } from '../lib/CurriCulum';
import { Collapse, Tag } from 'antd';
const { Panel } = Collapse;
const text1_1 = '전문교양(23학점)';
const text1_2 = '전공(전공필수 모두 포함하여 50학점)을 포함하여야 함 ';
const text1_3 = '총 132학점 이상(일반선택 포함) 이수하여야 함.';
const text2_1 =
  '전공기초영어(Ⅰ/Ⅱ) (전공기초) 중 한 과목을 반드시 이수하여야 함.';
const text3_1_1 =
  '① 기초교양(3학점) 글쓰기 (논리적사고와 글쓰기 || 공학글쓰기 ) 중하나를 이수하여야 함 ';
const text3_1_2 = '① 기초교양(3학점) 영어를 이수하여야 함';
const text3_1 =
  '전문교양(23학점) ② 일반교양, 핵심교양 영역(1영역∼7영역) 에서 예술과 디자인’, ‘제2외국어와 한문’영역을 반드시 포함해야함';
const text3_2 =
  '7개영역 중 6개 영역을 선택하여 각 영역별 1과목 이상 이수하여야 함.';
const text4_1 = '컴퓨터공학전공의 MSC과학 최소이수학점은  과학 9학점임.';
const text4_2 = '컴퓨터공학전공의 MSC수학 최소이수학점은  수학 9학점임.';
const text4_3 = `※ 공과대학(전자전기공학부 제외)은 MSC 과학분야 중 대학물리(1), 대학물리실험(1), 대학화학(1), 대학화학실험(1)을 반드시 이수하여야 하고, {대학물리(2), 대학물리실험(2)} 와 {대학화학(2), 대학화학실험(2)} 둘 중 택일하여 이수하여야 함.`;
const noti1 =
  '※ 교양과목(교양필수 및 교양선택)의 취득학점은 최대 50학점까지 인정됨.';
const noti2 = '※ 졸업 논문은 졸업 프로젝트로 대체';
let id = 1000;
const getId = () => {
  id += 1;
  return id;
};
const fail = () => ({
  backgroundColor: '#fff2e9',
});

const sucs = () => ({
  backgroundColor: '#f1f5ff',
});

const colorPicker = (tmp) => {
  if (tmp <= 0) return sucs();
  return fail();
};
const getExtra = (subjectState) => {
  if (subjectState === 0) {
    return (
      <Tag color="geekblue" key={getId()}>
        충족!
      </Tag>
    );
  } else {
    return (
      <Tag color="volcano" key={getId()}>
        부족!
      </Tag>
    );
  }
};
const PanelMaker = (text, subjectState, keys) => {
  if (subjectState === 0) {
    return (
      <Panel
        header={text}
        key={keys}
        extra={getExtra(subjectState)}
        disabled
      ></Panel>
    );
  } else if (subjectState > 0) {
    return (
      <Panel header={text} key={keys} extra={getExtra(subjectState)}>
        <p>{`해당 조건 ${subjectState} 학점이 모자랍니다`}</p>
      </Panel>
    );
  } else {
    return (
      <Panel
        header={text}
        key={keys}
        extra={getExtra(subjectState)}
        disabled
      ></Panel>
    );
  }
};

const PanelListMaker = (text, subjectState, keys, res, mode) => {
  if (subjectState === 0) {
    return (
      <Panel
        header={text}
        key={keys}
        extra={getExtra(subjectState)}
        disabled
      ></Panel>
    );
  } else {
    if (mode === 1) {
      return (
        <Panel header={text} key={keys} extra={getExtra(subjectState)}>
          {res.map((x, i) => {
            if (x === '일교4' || x === '핵교6') {
              return (
                <p key={getId()}>
                  <Tag color="volcano" key={getId()}>
                    {x} | {curriculum['2016'][x[x.length - 1]]['name']}
                  </Tag>
                  {curriculum['2016'][x[x.length - 1]]['subject'].map(
                    (y, j) => (
                      <Tag key={getId()} color="geekblue">
                        {y}
                      </Tag>
                    )
                  )}
                </p>
              );
            }
          })}
          <p>
            모든 영역을 해결해야합니다 각영역의 과목을 최소하나씩 이수하여야
            합니다
          </p>
        </Panel>
      );
    } else {
      return (
        <Panel header={text} key={keys} extra={getExtra(subjectState)}>
          {res.map((x, i) => (
            <p key={getId()}>
              <Tag key={getId()} color="volcano">
                {x} | {curriculum['2016'][x[x.length - 1]]['name']}
              </Tag>
              {curriculum['2016'][x[x.length - 1]]['subject'].map((y, j) => (
                <Tag key={getId()} color="geekblue">
                  {y}
                </Tag>
              ))}
            </p>
          ))}
          <p>{`${res.length}개 영역 중에 최소${
            res.length - 1
          } 개의 영역을 이수하여야 합니다`}</p>
        </Panel>
      );
    }
  }
};
const MyGraduateInfo16To18 = ({ obj }) => {
  const gState = JSON.parse(JSON.stringify(obj));
  return (
    <Collapse>
      {PanelMaker(
        text1_1,
        gState['이수요건']['전문교양']['qualify'],

        1
      )}
      {PanelMaker(
        text1_2,
        gState['이수요건']['전공']['qualify'],

        4
      )}
      {PanelMaker(text1_3, gState['이수요건']['이수학점']['qualify'], 5)}
      {PanelMaker(text2_1, gState['전공기초영어']['qualify'], 6)}
      {PanelMaker(text3_1_1, gState['전문교양']['기초교양']['글쓰기'], 7)}
      {PanelMaker(
        text3_1_2,
        gState['전문교양']['기초교양']['영어'],

        8
      )}
      {PanelListMaker(
        text3_1,
        gState['전문교양']['필수영역']['qualify'],
        10,
        gState['전문교양']['rest'],
        1
      )}
      {PanelListMaker(
        text3_2,
        gState['전문교양']['드래곤볼']['qualify'],

        11,
        gState['전문교양']['rest'],
        2
      )}
      {PanelMaker(
        text4_1,
        gState['MSC']['수학'],

        13
      )}
      {PanelMaker(
        text4_2,
        gState['MSC']['과학'],

        14
      )}
      {PanelMaker(
        text4_3,
        gState['MSC']['과학조건'],

        15
      )}
      <Panel header={'비고'} key="17">
        <p>{noti1}</p>
        <p>{noti2}</p>
      </Panel>
    </Collapse>
  );
};

export default MyGraduateInfo16To18;
