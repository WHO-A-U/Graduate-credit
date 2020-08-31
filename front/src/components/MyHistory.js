import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
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
];

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

MyHistory.propTypes = {
  history: PropTypes.object,
};
export default MyHistory;
