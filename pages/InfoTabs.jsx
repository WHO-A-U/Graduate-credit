import React from 'react';
import { Tabs } from 'antd';
import NormalInfo from './NormalContent';
import StudentContent from './StudentContent';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const InfoTabs = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="일반 공지" key="1">
          Content of Tab Pane 1<NormalInfo></NormalInfo>
        </TabPane>
        <TabPane tab="학생 공지" key="2">
          Content of Tab Pane 2<StudentContent></StudentContent>
        </TabPane>
        <TabPane tab="컴퓨터공학과 공지" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default InfoTabs;
