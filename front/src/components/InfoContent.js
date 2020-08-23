import React from 'react';

import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => (
      <a href={'http://' + record.url} target="_blank" rel="noreferrer">
        {text}
      </a>
    ),
  },
  // {
  //   title: 'Url',
  //   dataIndex: 'url',
  //   key: 'url',
  // },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];
const InfoContent = ({ Contentlist }) => {
  return (
    <>
      {/* <ul>
        {Contentlist.map((x, i) => (
          <li key={i}>
            <div>
              <p>title: {x.title}</p>
              <p>
                <a href={`http://${x.url}`} target="_blank" rel="noreferrer">
                  공지 바로가기
                </a>
              </p>
              <p>date : {x.date}</p>
            </div>
          </li>
        ))}
      </ul> */}
      <Table tableLayout="auto" columns={columns} dataSource={Contentlist} />
    </>
  );
};

export default InfoContent;
