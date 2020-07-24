import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const InfoTabs = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="일반 공지" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="학생 공지" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="컴퓨터공학과 공지" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default InfoTabs;
