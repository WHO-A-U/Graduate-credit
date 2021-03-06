import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MyHistory from '../components/MyHistory';
import TotalDegree from './TotalDegreeTable';

import MyGraduateInfo10To15 from './MyGraduateInfo10-15';
import MyGraduateInfo16To18 from './MyGraduateInfo16-18';
import MyGraduateInfo19 from './MyGraduateInfo19';
import MyGraduateInfo20 from './MyGraduateInfo20';
import SubjectCardList from './SubjectCardList';
const condition1015 = require('../lib/Condition10-15');
const condition1618 = require('../lib/Condition16-18');
const condition19 = require('../lib/Condition19');
const condition20 = require('../lib/Condition20');

const degreeObj = { 전공평점: 0, 평점: 0 };

const setDegrees = (degreeObj, history) => {
  const info = history.info;
  for (let i = 0; i < info.length; i++) {
    if (info[i].subject === '전공평점') degreeObj['전공평점'] = info[i].degree;
    if (info[i].subject === '평점') degreeObj['평점'] = info[i].degree;
  }
};

const MyGraduateInfoMaker = (history, year) => {
  if (year >= 2020) {
    return (
      <MyGraduateInfo20 obj={condition20(history.subject, history.info)} />
    );
  } else if (year >= 2019) {
    return (
      <MyGraduateInfo19 obj={condition19(history.subject, history.info)} />
    );
  } else if (year >= 2016) {
    return (
      <MyGraduateInfo16To18
        obj={condition1618(history.subject, history.info)}
      />
    );
  } else if (year >= 2010) {
    return (
      <MyGraduateInfo10To15
        obj={condition1015(history.subject, history.info)}
      />
    );
  }
  return <div>에러 발생... 죄송합니다 ㅜㅜ</div>;
};
const GraduateInfo = ({ history }) => {
  const myYear = parseInt(
    useSelector((state) => state.myHistory.admissionYear)
  );
  setDegrees(degreeObj, history);
  return (
    <>
      <div>
        <Col>
          <Row>
            <Col lg={{ span: 22, offset: 1 }} xs={{ span: 24 }}>
              {MyGraduateInfoMaker(history, myYear)}
            </Col>
          </Row>
          <Row span={8} className="subjectHistory">
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 1 }}>
              <MyHistory history={history.subject}></MyHistory>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 1 }}>
              <SubjectCardList info={history.info}></SubjectCardList>
            </Col>
            <Col>
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
