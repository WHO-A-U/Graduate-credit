import React, { useState } from "react";
import { Table, Tag, Space, Row, Col } from "antd";
import MyHistory from "../components/MyHistory";
import MyGraduateInfo from "../components/MyGraduateInfo";
const condition1func = require("../lib/Condition1func");

const GraduateInfo = ({ history }) => {
  const graduateState = condition1func(history.subject, history.info);

  return (
    <>
      <div>
        <Row>
          <Col span={8}>
            <MyHistory history={history.subject}></MyHistory>
          </Col>

          <Col span={16}>
            <MyGraduateInfo graduateState={graduateState} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GraduateInfo;
