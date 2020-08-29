import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InfoTabs from '../components/InfoTabs';
import { connect } from 'react-redux';
import { getInfo } from '../modules/infoContent';

function isEmptyObject(param) {
  if (param === undefined) return true;
  return Object.keys(param).length === 0 && param.constructor === Object;
}

const InfoTabsContainer = ({ setCurInfofn, info, loading, error, getInfo }) => {
  useEffect(() => {
    if (isEmptyObject(info)) getInfo();
  }, [getInfo]);

  return isEmptyObject(info) ? (
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
  info: PropTypes.object,
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
