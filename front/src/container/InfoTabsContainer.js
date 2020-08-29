import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InfoTabs from '../components/InfoTabs';
import { connect } from 'react-redux';
import { getInfo } from '../modules/infoContent';

const InfoTabsContainer = ({ setCurInfofn, info, loading, error, getInfo }) => {
  useEffect(() => {
    if (info.length === 0) getInfo();
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

InfoTabsContainer.propTypes = {
  setCurInfofn: PropTypes.func,
  info: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  getInfo: PropTypes.func,
};
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
