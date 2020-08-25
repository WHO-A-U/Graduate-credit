import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import InfoContent from '../components/InfoContent';
import InfoTabs from '../components/InfoTabs';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getInfo } from '../modules/InfoContent';
const { TabPane } = Tabs;

const InfoTabsContainer = ({ info, loading, error, getInfo }) => {
    const info = useSelector(state=>state.info)
    const loading = useSelector(state=>state.loading)
    const error = useSelector(state=>state.error)
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:})
  }, []);

  return Object.keys(info) == 0 ? (
    <div>로딩중....</div>
  ) : (
    <>
      {/* <Tabs defaultActiveKey="1">
          <TabPane tab="일반 공지" key="1">
            <InfoContent Contentlist={info[1]}></InfoContent>
          </TabPane>
          <TabPane tab="학생 공지" key="2">
            <InfoContent Contentlist={info[2]}></InfoContent>
          </TabPane>
          <TabPane tab="컴퓨터공학과 공지" key="3">
            <InfoContent Contentlist={info[3]}></InfoContent>
          </TabPane>
        </Tabs> */}
      <InfoTabs
        studentContentList={info[1]}
        normalContentList={info[2]}
        computerContentList={info[3]}
      ></InfoTabs>
    </>
  );
};

// export default InfoTabs;

export default connect(
  ({ InfoTabs }) => ({
    info: InfoTabs.info,
    loading: InfoTabs.loading,
    error: InfoTabs.error,
  }),
  {
    getInfo,
  }
)(InfoTabsContainer);
