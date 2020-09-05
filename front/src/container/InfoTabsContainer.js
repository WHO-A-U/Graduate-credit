import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InfoTabs from '../components/InfoTabs';
import { connect } from 'react-redux';
import { getInfo } from '../modules/InfoContent';
import { Spin } from 'antd';
function isEmptyObject(param) {
  if (param === undefined) return true;
  return Object.keys(param).length === 0 && param.constructor === Object;
}

const InfoTabsContainer = ({ setCurInfofn, info, getInfo }) => {
  useEffect(() => {
    if (isEmptyObject(info)) getInfo();
  }, [getInfo, info]);

  return isEmptyObject(info) ? (
    <Spin tip="Loading ..."></Spin>
  ) : (
    <>
      <InfoTabs
        studentContentList={info[1]}
        normalContentList={info[2]}
        computerContentList={info[3]}
        covidContentList={info[4]}
        communityContentList={info[5]}
        setCurInfofn={setCurInfofn}
      ></InfoTabs>
    </>
  );
};

InfoTabsContainer.propTypes = {
  setCurInfofn: PropTypes.func,
  info: PropTypes.object,
  getInfo: PropTypes.func,
};
export default connect(
  ({ infoContent }) => ({
    info: infoContent.info,
  }),
  {
    getInfo,
  }
)(InfoTabsContainer);
