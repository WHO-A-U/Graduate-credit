import React, { useState } from "react";
import { Table, Tag, Space, Row, Col } from "antd";

const getArrFromObj = (graduateState) => {
  let array = [];
  for (let i in graduateState) {
    array.push(graduateState[i]);
  }
  return array;
};
const MyGraduateInfo20 = (graduateState) => {
  const stateArrObj = getArrFromObj(graduateState);
  const columns = [
    {
      title: "졸업 요건",
      dataIndex: "condition",
      key: "condition",
    },
    {
      title: "충족 여부",
      dataIndex: "pass",
      key: "pass",
      // eslint-disable-next-line react/display-name
      render: (pass) => {
        return (
          <>
            {pass.map((tag) => {
              console.log("난 태그야!", tag);
              let color = "geekblue";

              if (tag.length) color = "volcano";
              if (tag !== 0) color = "volcano";

              return (
                <Tag color={color} key={tag}>
                  {color === "volcano"
                    ? typeof tag === "number"
                      ? `부족! ${tag}학점`
                      : `부족! ${tag}`
                    : `충족!`}
                </Tag>
              );
            })}
          </>
        );
      },
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     condition:
  //       "이수요건 : 전문교양(23학점), MSC(30학점), 전공기초영어(2학점), 전공(전공필수 모두 포함하여 54학점)을 포함하여 총 132학점 이상(일반선택 포함) 이수하여야 함",
  //     pass: ["loser"],
  //   },
  //   {
  //     key: "2",
  //     condition: "전공기초영어(Ⅰ/Ⅱ) (전공기초)중 한 과목을 반드시 이수하여야 함",
  //     pass: ["win", "hi"],
  //   },
  //   {
  //     key: "3",
  //     condition: `'전문교양(기본소양)
  //     ① 기초교양(6학점)
  //     ② 일반교양, 핵심교양 영역(1영역∼7영역) : ‘예술과 디자인’, ‘제2외국어와 한문’영역을 반드시 포함하   여 7개 영역 중 6개 영역을 선택하여 각 영역별 1과목 이상 이수하여야 함.
  //     ③ 단, 교양과목(교양필수 및 교양선택)의 취득학점은 최대 40학점까지 인정됨'`,
  //     pass: ["loserawefpaowe", "hello"],
  //   },
  // ];

  const data = [
    {
      key: "1",
      condition: `정보컴퓨터공학부 컴퓨터공학전공 및 산업공학전공의 공학교육비인증과정 학생의 MSC 분야별 최소이수학점은 수학 및 과학 18학점`,
      pass: [stateArrObj[0].MSC.수학과학.qualify],
    },
    {
      key: "2",
      condition:
        "전산 6학점 - 정보컴퓨터공학부 컴퓨터공학전공 : 학과에서 지정한 과목 <정보시스템개론, 객체지향프로그래밍, C-프로그래밍> 중 6학점을 이수해야 함. ",
      pass: [stateArrObj[0].MSC.전산.qualify],
    },
    {
      key: "3",
      condition: `전문교양(기초교양,일반교양,핵심교양 모두 합쳐 최소 23학점)에서 컴공최소 기초교양학점 6학점 중 글쓰기
      단, 교양과목(교양필수 및 교양선택)의 취득학점은 최대 50학점까지 인정`,
      pass: [stateArrObj[0].전문교양.기초교양.글쓰기],
    },
    {
      key: "4",
      condition: `컴공 기초교양학점 최소 6학점 중 영어. 단, 교양과목(교양필수 및 교양선택)의 취득학점은 최대 50학점까지 인정`,
      pass: [stateArrObj[0].전문교양.기초교양.영어],
    },
    {
      key: "5",
      condition: `전문교양(필수영역) ‘예술과 디자인’, ‘제2외국어와 한문’영역을 반드시 포함여부`,
      pass: [stateArrObj[0].전문교양.필수영역.qualify],
    },
    {
      key: "6",
      condition: `컴공 특성화교양(디자인씽킹, 창업과 실용법률) 중 한 과목(3학점)을 반드시 이수`,
      pass: [stateArrObj[0].이수요건.특성화교양.qualify],
    },
    {
      key: "7",
      condition: `드래곤볼, 일반교양, 핵심교양 영역(1영역∼7영역) + 필수영역 포함하여 7개영역 중 6개 영역을 선택하여 각 영역별 1과목 이상 이수하여야 함.
        단, 교양과목(교양필수 및 교양선택)의 취득학점은 최대 50학점까지 인정됨.`,
      pass: [stateArrObj[0].전문교양.rest],
    },
    {
      key: "8",
      condition: `전공기초영어(Ⅰ/Ⅱ) (전공기초) 중 한 과목을 반드시 이수`,
      pass: [stateArrObj[0].전공기초영어.qualify],
    },
    {
      key: "9",
      condition: `전공이수학점. 전공(전공필수 모두 포함하여 최소 50학점)`,
      pass: [stateArrObj[0].이수요건.전공.qualify],
    },
    {
      key: "10",
      condition: `전체이수학점 총 132학점 이상(일반선택 포함) 이수`,
      pass: [stateArrObj[0].이수요건.이수학점.qualify],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default MyGraduateInfo20;
