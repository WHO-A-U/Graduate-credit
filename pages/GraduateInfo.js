import React, { useState } from 'react';
import { Table, Tag, Space, Row, Col } from 'antd';
import MyHistory from '../contents/MyHistory';
import MyGraduateInfo from '../contents/MyGraduateInfo';
const GraduateInfo = () => {
  return (
    <>
      <div>
        <Row>
          <Col span={12}>
            <MyHistory></MyHistory>
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
