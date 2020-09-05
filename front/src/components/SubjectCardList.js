import React from 'react';
import { Table, Tag } from 'antd';
const SubjectCardList = ({ info }) => {
  const columns = [
    {
      title: '항목',
      dataIndex: 'subject',
      key: 'subject',
      render: (text) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: '계',
      dataIndex: 'value',
      key: 'value',
    },
  ];
  const data = info
    .filter((x) => x.subject.indexOf('평점') === -1)
    .map((x, i) => {
      return {
        key: i + 100000,
        subject: x.subject,
        value: x.degree + '학점',
      };
    });
  return <Table columns={columns} dataSource={data} />;
};

export default SubjectCardList;
