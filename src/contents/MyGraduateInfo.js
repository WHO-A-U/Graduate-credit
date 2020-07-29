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
    condition: '조건 1',
    pass: '충족',
  },
  {
    key: '2',
    condition: '조건 2',
    pass: '부족',
  },
  {
    key: '3',
    condition: '조건 3',
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
