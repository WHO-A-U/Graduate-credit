import React from 'react';
import { Tabs } from 'antd';
import InfoContent from './InfoContent';
const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

const InfoTabs = ({
  studentContentList,
  normalContentList,
  computerContentList,
  setCurInfofn,
}) => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={setCurInfofn()}>
        <TabPane tab="일반 공지" key="1">
          <InfoContent Contentlist={normalContentList}></InfoContent>
        </TabPane>
        <TabPane tab="학생 공지" key="2">
          <InfoContent Contentlist={studentContentList}></InfoContent>
        </TabPane>
        <TabPane tab="컴퓨터공학과 공지" key="3">
          <InfoContent Contentlist={computerContentList}></InfoContent>
        </TabPane>
      </Tabs>
    </>
  );
};

export default InfoTabs;
