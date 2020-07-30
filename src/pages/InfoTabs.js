import React from 'react';
import { Tabs } from 'antd';
import NormalContent from '../contents/NormalContent';
import StudentContent from '../contents/StudentContent';
import ComputerContent from '../contents/ComputerContent';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const InfoTabs = ({
  studentContentList,
  normalContentList,
  computerContentList,
}) => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="일반 공지" key="1">
          <NormalContent normalContentList={normalContentList}></NormalContent>
        </TabPane>
        <TabPane tab="학생 공지" key="2">
          <StudentContent
            studentContentList={studentContentList}
          ></StudentContent>
        </TabPane>
        <TabPane tab="컴퓨터공학과 공지" key="3">
          <ComputerContent
            computerContentList={computerContentList}
          ></ComputerContent>
        </TabPane>
      </Tabs>
    </>
  );
};

export default InfoTabs;
