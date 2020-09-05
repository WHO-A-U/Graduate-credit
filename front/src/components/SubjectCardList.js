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
  const data = info.map((x, i) => {
    if (x.subject.indexOf('평점') === -1) {
      return {
        key: i + 100,
        subject: x.subject,
        value: x.degree + '학점',
      };
    }
    return null;
  });
  return <Table columns={columns} dataSource={data} />;
};

export default SubjectCardList;
