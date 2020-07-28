import React, { useState } from 'react';
import { Table, Tag, Space, Row, Col } from 'antd';
//   {
//     title: 'grade',
//     key: 'grade',
//     dataIndex: 'grade',
//     render: (grade) => (
//       <>
//         {grade.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
const columns = [
  {
    title: '학수번호',
    dataIndex: 'subjectId',
    key: 'subjectId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '과목명(국)',
    dataIndex: 'subjectName',
    key: 'subjectName',
  },
  {
    title: '이수구분',
    dataIndex: 'section',
    key: 'section',
  },
  {
    title: '차수',
    dataIndex: 'degree',
    key: 'degree',
  },
  {
    title: '학점',
    dataIndex: 'grade',
    key: 'grade',
  },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (text, record) => (
  //       <Space size="middle">
  //         <a>Invite {record.subjectId}</a>
  //         <a>Delete</a>
  //       </Space>
  //     ),
  //   },
];

const data = [
  {
    key: '1',
    subjectId: '101512',
    subjectName: '프로그래밍언어론',
    section: '전필',
    degree: '3',
    grade: 'A+',
  },
  {
    key: '2',
    subjectId: '101609',
    subjectName: '컴퓨터네트워크',
    section: '전선',
    degree: '3',
    grade: 'A0',
  },
  {
    key: '3',
    subjectId: '101510',
    subjectName: '컴퓨터구조',
    section: '전선',
    degree: '3',
    grade: 'A+',
  },
];
const MyHistory = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default MyHistory;
