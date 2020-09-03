import React from "react";
import { Table } from "antd";
const TotalDegree = (degree) => {
  const degreeObjArr = [];
  degreeObjArr.push(degree);
  const columns = [
    {
      title: "전체 평점",
      dataIndex: "totalDegree",
      key: "totalDegree",
    },
    {
      title: "전공 평점",
      dataIndex: "totalMajorDegree",
      key: "totalMajorDegree",
    },
  ];
  const data = [
    {
      key: "1",
      totalDegree: degreeObjArr[0].degree.평점,
      totalMajorDegree: degreeObjArr[0].degree.전공평점,
    },
  ];

  return <Table tableLayout="fixed" columns={columns} dataSource={data} />;
};
export default TotalDegree;
