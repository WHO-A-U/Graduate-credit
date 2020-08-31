import React, { useState } from "react";
import { Table, Tag, Space, Row, Col } from "antd";
import MyHistory from "../components/MyHistory";

import MyGraduateInfo10To15 from "./MyGraduateInfo10-15";
import MyGraduateInfo16To18 from "./MyGraduateInfo16-18";
import MyGraduateInfo19 from "./MyGraduateInfo19";
import MyGraduateInfo20 from "./MyGraduateInfo20";

const condition1015 = require("../lib/Condition10-15");
const condition1618 = require("../lib/Condition16-18");
const condition19 = require("../lib/Condition19");
const condition20 = require("../lib/Condition20");

const GraduateInfo = ({ history }) => {
  const graduateState10To15 = condition1015(history.subject, history.info);
  const graduateState16To18 = condition1618(history.subject, history.info);
  const graduateState19 = condition19(history.subject, history.info);
  const graduateState20 = condition20(history.subject, history.info);
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
