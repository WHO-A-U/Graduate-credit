import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import MyHistory from "../components/MyHistory";

import MyGraduateInfo10To15 from "./MyGraduateInfo10-15";
import MyGraduateInfo16To18 from "./MyGraduateInfo16-18";
import MyGraduateInfo19 from "./MyGraduateInfo19";
import MyGraduateInfo20 from "./MyGraduateInfo20";
import TotalDegree from "./TotalDegreeTable";

const condition1015 = require("../lib/Condition10-15");
const condition1618 = require("../lib/Condition16-18");
const condition19 = require("../lib/Condition19");
const condition20 = require("../lib/Condition20");

const degreeObj = { 전공평점: 0, 평점: 0 };

const setDegrees = (degreeObj, history) => {
  const info = history.info;
  for (let i = 0; i < info.length; i++) {
    if (info[i].subject === "전공평점") degreeObj["전공평점"] = info[i].degree;
    if (info[i].subject === "평점") degreeObj["평점"] = info[i].degree;
  }
};

const GraduateInfo = ({ history }) => {
  const graduateState10To15 = condition1015(history.subject, history.info);
  const graduateState16To18 = condition1618(history.subject, history.info);
  const graduateState19 = condition19(history.subject, history.info);
  const graduateState20 = condition20(history.subject, history.info);

  const myYear = parseInt(
    useSelector((state) => state.myHistory.admissionYear)
  );
  setDegrees(degreeObj, history);
  return (
    <>
      <div>
        <Col>
          <Row span={16}>
            {2010 <= myYear && myYear <= 2015 ? (
              <MyGraduateInfo10To15
                graduateState={graduateState10To15}
                myYear={myYear}
              />
            ) : 2016 <= myYear && myYear <= 2018 ? (
              <MyGraduateInfo16To18 graduateState={graduateState16To18} />
            ) : myYear <= 2019 ? (
              <MyGraduateInfo19 graduateState={graduateState19} />
            ) : (
              <MyGraduateInfo20 graduateState={graduateState20} />
            )}
          </Row>

          <Row span={7}>
            <Col span={12}>
              <MyHistory history={history.subject}></MyHistory>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <TotalDegree degree={degreeObj} />
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};
GraduateInfo.propTypes = {
  history: PropTypes.object,
};
export default GraduateInfo;
