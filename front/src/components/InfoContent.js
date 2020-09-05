import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

const titleRender = (text, record) => {
  return (
    <a
      id={record.title}
      href={'http://' + record.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: titleRender,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const InfoContent = ({ Contentlist }) => {
  const isloading = useSelector((state) => state.infoContent.loading);
  return (
    <>
      <Table
        tableLayout="auto"
        loading={isloading}
        columns={columns}
        dataSource={Contentlist}
        rowKey="title"
      />
    </>
  );
};

InfoContent.propTypes = {
  Contentlist: PropTypes.array,
};
export default InfoContent;
