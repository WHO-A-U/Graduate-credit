import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import InfoContent from './InfoContent';
const { TabPane } = Tabs;

const InfoTabs = ({
  studentContentList,
  normalContentList,
  computerContentList,
  covidContentList,
  communityContentList,
  setCurInfofn,
}) => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={setCurInfofn()}>
        <TabPane tab="컴퓨터공학과 공지" key="1">
          <InfoContent Contentlist={computerContentList}></InfoContent>
        </TabPane>
        <TabPane tab="코로나 공지" key="2">
          <InfoContent Contentlist={covidContentList}></InfoContent>
        </TabPane>
        <TabPane tab="학생 공지" key="3">
          <InfoContent Contentlist={studentContentList}></InfoContent>
        </TabPane>
        <TabPane tab="일반 공지" key="4">
          <InfoContent Contentlist={normalContentList}></InfoContent>
        </TabPane>
        <TabPane tab="인턴 및 대외활동 공지" key="5">
          <InfoContent Contentlist={communityContentList}></InfoContent>
        </TabPane>
      </Tabs>
    </>
  );
};
InfoTabs.propTypes = {
  normalContentList: PropTypes.array,
  studentContentList: PropTypes.array,
  computerContentList: PropTypes.array,
  setCurInfofn: PropTypes.func,
};
export default InfoTabs;
