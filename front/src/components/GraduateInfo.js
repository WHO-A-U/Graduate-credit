import React, { useState } from "react";
import { Table, Tag, Space, Row, Col } from "antd";
import MyHistory from "../components/MyHistory";
import MyGraduateInfo10To15 from "./MyGraduateInfo10-15";
import MyGraduateInfo16To18 from "./MyGraduateInfo16-18";

const condition1func = require("../lib/Condition10-15");
const condition2func = require("../lib/Condition16-18");

const GraduateInfo = ({ history }) => {
  const graduateState10To15 = condition1func(history.subject, history.info);
  const graduateState16To18 = condition2func(history.subject, history.info);
  console.log("난그레듓!!!", graduateState10To15);
  console.log("난 입학년도다!!!!", history.admissionYear);
  console.log("난 통짜 히스토리다!!!!", history);
  return (
    <>
      <div>
        <Row>
          <Col span={8}>
            <MyHistory history={history.subject}></MyHistory>
          </Col>

          <Col span={16}>
            {/* <MyGraduateInfo16To18 graduateState={graduateState} /> */}
            <MyGraduateInfo10To15 graduateState={graduateState10To15} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GraduateInfo;
