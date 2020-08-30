import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';
import GraduateForm from './GraduateForm';
import GraduateInfo from './GraduateInfo';
import Navigator from './Navigator';
import InfoTabsContainer from '../container/InfoTabsContainer';
const { Content } = Layout;

const infoList = {
  1: '일반 공지',
  2: '학생 공지',
  3: '컴퓨터공학과 공지',
};
const AppLayout = ({ isLogined, history }) => {
  const [curPage, setCurPage] = useState(1);
  const [curInfo, setCurInfo] = useState(1);

  const onClickPage = useCallback((item) => {
    setCurPage(parseInt(item.key, 10));
  }, []);

  const setCurInfofn = useCallback(
    () => (id) => {
      setCurInfo(id);
    },
    []
  );

  const InfoPage = () => {
    switch (curPage) {
      case 1:
        return (
          <InfoTabsContainer setCurInfofn={setCurInfofn}></InfoTabsContainer>
        );
      case 2:
        return isLogined ? (
          <GraduateInfo history={history.subject}></GraduateInfo>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <GraduateForm></GraduateForm>
          </div>
        );
    }
  };

  return (
    <>
      <Layout className="layout">
        <Navigator onClick={onClickPage}></Navigator>
        <Content>
          <Breadcrumb style={{ margin: '24px 24px 24px 24px' }}>
            <Breadcrumb.Item>
              {curPage == 1 ? '공지사항' : '졸업학점 계산기'}
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {curPage == 1 ? infoList[curInfo] : '졸업학점'}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{InfoPage()}</div>
        </Content>
      </Layout>
    </>
  );
};
AppLayout.propTypes = {
  isLogined: PropTypes.bool,
  history: PropTypes.object,
};
export default connect(({ myHistory }) => ({
  isLogined: myHistory.isLogined,
  history: myHistory.history,
}))(AppLayout);
