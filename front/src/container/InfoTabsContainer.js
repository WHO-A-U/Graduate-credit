import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import InfoContent from '../components/InfoContent';
import InfoTabs from '../components/InfoTabs';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getInfo } from '../modules/infoContent';
const { TabPane } = Tabs;

const InfoTabsContainer = ({ setCurInfofn, info, loading, error, getInfo }) => {
  // const info = useSelector((state) => state.info);
  // const loading = useSelector((state) => state.loading);
  // const error = useSelector((state) => state.error);
  // const dispatch = useDispatch();
  useEffect(() => {
    getInfo();
    console.log(info);
    console.log(loading);
    console.log(error);
    console.log(getInfo);
  }, [getInfo]);

  return !info ? (
    <div>로딩중....</div>
  ) : (
    <>
      <InfoTabs
        studentContentList={info[1]}
        normalContentList={info[2]}
        computerContentList={info[3]}
        setCurInfofn={setCurInfofn}
      ></InfoTabs>
    </>
  );
};

// export default InfoTabs;

export default connect(
  ({ infoContent }) => ({
    info: infoContent.info,
    loading: infoContent.loading,
    error: infoContent.error,
  }),
  {
    getInfo,
  }
)(InfoTabsContainer);
