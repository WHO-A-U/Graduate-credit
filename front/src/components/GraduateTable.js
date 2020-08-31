import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '글씨 색깔',
    dataIndex: 'condition',
    key: 'condition',
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
];

const GraduateTable = () => {
  return (
    <Table tableLayout="fixed" columns={columns} dataSource={data} />
    // <Table tableLayout="fixed" columns={columns2} dataSource={data2} />
  );
};
export default GraduateTable;
