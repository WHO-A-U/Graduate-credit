import React, { useState } from 'react';
import { Table, Tag, Space, Row, Col } from 'antd';
const columns = [
  {
    title: '졸업 요건',
    dataIndex: 'condition',
    key: 'condition',
  },
  {
    title: '충족 여부',
    dataIndex: 'pass',
    key: 'pass',
  },
];

const data = [
  {
    key: '1',
    condition:
      '이수요건 : 전문교양(23학점), MSC(30학점), 전공기초영어(2학점), 전공(전공필수 모두 포함하여 54학점)을 포함하여 총 132학점 이상(일반선택 포함) 이수하여야 함',
    pass: '충족',
  },
  {
    key: '2',
    condition: '전공기초영어(Ⅰ/Ⅱ) (전공기초)중 한 과목을 반드시 이수하여야 함',
    pass: '부족',
  },
  {
    key: '3',
    condition: `'전문교양(기본소양)
    ① 기초교양(6학점)
    ② 일반교양, 핵심교양 영역(1영역∼7영역) : ‘예술과 디자인’, ‘제2외국어와 한문’영역을 반드시 포함하   여 7개 영역 중 6개 영역을 선택하여 각 영역별 1과목 이상 이수하여야 함.
    ③ 단, 교양과목(교양필수 및 교양선택)의 취득학점은 최대 40학점까지 인정됨'`,
    pass: '충족',
  },
];
const MyGraduateInfo = () => {
  return (
    <>
      <Table tableLayout="fixed" columns={columns} dataSource={data} />
    </>
  );
};

export default MyGraduateInfo;
