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
    dataIndex: 'number',
    key: 'number',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '과목명(국)',
    dataIndex: 'subject',
    key: 'subject',
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
  //         <a>Invite {record.number}</a>
  //         <a>Delete</a>
  //       </Space>
  //     ),
  //   },
];

//   [
//   {
//     key: '1',
//     number: '101512',
//     subject: '프로그래밍언어론',
//     section: '전필',
//     degree: '3',
//     grade: 'A+',
//   },
//   {
//     key: '2',
//     number: '101609',
//     subject: '컴퓨터네트워크',
//     section: '전선',
//     degree: '3',
//     grade: 'A0',
//   },
//   {
//     key: '3',
//     number: '101510',
//     subject: '컴퓨터구조',
//     section: '전선',
//     degree: '3',
//     grade: 'A+',
//   },
// ];
const MyHistory = ({ history }) => {
  const data = history.map((x, i) => {
    return {
      key: i,
      ...x,
    };
  });
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default MyHistory;
