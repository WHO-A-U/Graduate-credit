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
const text3_4 =
  '특성화교양(디자인씽킹, 창업과 실용법률) 중 한 과목을 반드시 이수하여야 함.';
const text4_1 =
  '정보컴퓨터공학,컴퓨터공학전공의 MSC분야별 최소이수학점은 수학 및 과학 18학점임';
const text4_2 = `정보컴퓨터공학,컴퓨터공학전공의 MSC 전산분야는 정보시스템개론,객체지향프로그래밍,C-프로그래밍 중 6학점을 이수해야함`;
const noti1 =
  '※ 교양과목(교양필수 및 교양선택)의 취득학점은 최대 50학점까지 인정됨.';
const noti2 = '※ 졸업 논문은 졸업 프로젝트로 대체';
let id = 1000;
const getId = () => {
  id += 1;
  return id;
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
          <p key={getId()}>
            해결하지 못한영역 :{' '}
            {res.map((x) => {
              if (x === '일교4' || x === '일교5') {
                return (
                  <Tag color="volcano" key={getId()}>
                    {x}
                  </Tag>
                );
              }
              return null;
            })}
          </p>
          {res.map((x, i) => {
            if (x === '일교4' || x === '일교5') {
              return (
                <p key={getId()}>
                  <Tag color="volcano" key={getId()}>
                    {x} | {curriculum['2016'][x[x.length - 1]]['name']}
                  </Tag>
                  영역을 해결하기위해서
                  {curriculum['2016'][x[x.length - 1]]['subject'].map(
                    (y, j) => (
                      <Tag key={getId()} color="geekblue">
                        {y}
                      </Tag>
                    )
                  )}
                  이중 하나를 이수하여야 합니다
                </p>
              );
            }
            return null;
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
          <p key={getId()}>
            해결하지 못한영역 :{' '}
            {res.map((x) => (
              <Tag color="volcano" key={getId()}>
                {x}
              </Tag>
            ))}
          </p>
          {res.map((x, i) => (
            <p key={getId()}>
              <Tag key={getId()} color="volcano">
                {x} | {curriculum['2016'][x[x.length - 1]]['name']}
              </Tag>{' '}
              영역을 해결하기위해서
              {curriculum['2016'][x[x.length - 1]]['subject'].map((y, j) => (
                <Tag key={getId()} color="geekblue">
                  {y}
                </Tag>
              ))}
              이중 하나를 이수하여야 합니다
            </p>
          ))}
          <p>{`${res.length}개 영역 중에 최소${Math.max(
            res.length - 1,
            res.filter((x) => x === '일교4' || x === '일교5').length
          )} 개의 영역을 이수하여야 합니다`}</p>
        </Panel>
      );
    }
  }
};
const MyGraduateInfo20 = ({ obj }) => {
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
      {PanelMaker(text3_1_2, gState['전문교양']['기초교양']['영어'], 8)}
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
        text3_4,
        gState['특성화교양']['qualify'],

        12
      )}
      {PanelMaker(
        text4_1,
        gState['MSC']['수학과학']['qualify'],

        13
      )}
      {PanelMaker(
        text4_2,
        gState['MSC']['전산']['qualify'],

        14
      )}
      <Panel header={'비고'} key="17">
        <p>{noti1}</p>
        <p>{noti2}</p>
      </Panel>
    </Collapse>
  );
};

export default MyGraduateInfo20;
