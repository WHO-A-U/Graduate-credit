import React, { useState } from "react";
import { Table, Tag, Space, Row, Col } from "antd";

const getArrFromObj = (graduateState) => {
  let array = [];
  for (let i in graduateState) {
    array.push(graduateState[i]);
  }
  return array;
};
const MyGraduateInfo = (graduateState) => {
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
              if (tag !== 0) {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {color === "volcano" ? `부족! ${tag}학점` : `충족!`}
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
      condition: "MSC과학",
      pass: [stateArrObj[0].MSC.과학],
    },
    {
      key: "2",
      condition: "MSC수학",
      pass: [stateArrObj[0].MSC.수학],
    },
    {
      key: "3",
      condition: `전문교양(기초교양 : 글쓰기)`,
      pass: [stateArrObj[0].전문교양.기초교양.글쓰기],
    },
    {
      key: "4",
      condition: `전문교양(기초교양 : 영어)`,
      pass: [stateArrObj[0].전문교양.기초교양.영어],
    },
    {
      key: "5",
      condition: `전문교양(필수영역)`,
      pass: [stateArrObj[0].전문교양.필수영역],
    },
    {
      key: "6",
      condition: `드래곤볼`,
      pass: [stateArrObj[0].전문교양.드래곤볼.qualify],
    },
    {
      key: "7",
      condition: `전공기초영어`,
      pass: [stateArrObj[0].전공기초영어.qualify],
    },
    {
      key: "8",
      condition: `전공이수학점`,
      pass: [stateArrObj[0].이수요건.전공.qualify],
    },
    {
      key: "9",
      condition: `전체이수학점`,
      pass: [stateArrObj[0].이수요건.이수학점.qualify],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default MyGraduateInfo;
