import React from "react";
import { Table, Tag } from "antd";
import PropTypes from "prop-types";
const columns = [
  {
    title: '학수번호',
    dataIndex: 'number',
    key: 'number',
    render: (text) => <a href="/#">{text}</a>,
  },
  {
    title: "과목명(국)",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "이수구분",
    dataIndex: "section",
    key: "section",
  },
  {
    title: "차수",
    dataIndex: "degree",
    key: "degree",
  },
  {
    title: "학점",
    dataIndex: "grade",
    key: "grade",
    render: (text) => {
      if (text === "A+") {
        return <Tag color="purple">A+</Tag>;
<<<<<<< HEAD
      } else if (text === "A0") {
        return <Tag color="geekblue">A0</Tag>;
      } else if (text === "B+") {
        return <Tag color="green">B+</Tag>;
      } else if (text === "B0") {
        return <Tag color="lime">B0</Tag>;
      } else if (text === "C+") {
        return <Tag color="orange">C+</Tag>;
      } else if (text === "C0") {
        return <Tag color="volcano">C0</Tag>;
      } else if (text === "D+") {
        return <Tag color="red">D+</Tag>;
      } else if (text === "D0") {
        return <Tag color="magenta">D0</Tag>;
      } else if (text === "P") {
=======
      } else if (text === 'A0') {
        return <Tag color="geekblue">A0</Tag>;
      } else if (text === 'B+') {
        return <Tag color="green">B+</Tag>;
      } else if (text === 'B0') {
        return <Tag color="lime">B0</Tag>;
      } else if (text === 'C+') {
        return <Tag color="orange">C+</Tag>;
      } else if (text === 'C0') {
        return <Tag color="volcano">C0</Tag>;
      } else if (text === 'D+') {
        return <Tag color="red">D+</Tag>;
      } else if (text === 'D0') {
        return <Tag color="magenta">D0</Tag>;
      } else if (text === 'P') {
>>>>>>> a24eb0524628788cdd1bdfa079f80a8fc315e5c1
        return <Tag color="default">P</Tag>;
      }
    },
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
  history: PropTypes.array,
};
export default MyHistory;
