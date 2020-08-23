import React, { useState } from 'react';
import { Table, Tag, Space, Row, Col } from 'antd';
import MyHistory from '../components/MyHistory';
import MyGraduateInfo from '../components/MyGraduateInfo';
const GraduateInfo = ({ history }) => {
  return (
    <>
      <div>
        <Row>
          <Col span={12}>
            <MyHistory history={history}></MyHistory>
          </Col>
          <Col span={12}>
            <MyGraduateInfo></MyGraduateInfo>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GraduateInfo;
