import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Breadcrumb, Row, Col } from 'antd';
import GraduateForm from './GraduateForm';
import GraduateInfo from './GraduateInfo';
import Navigator from './Navigator';
import InfoTabsContainer from '../container/InfoTabsContainer';
import FAQ from './FAQ';
const { Content, Footer } = Layout;

const infoList = {
  1: '컴퓨터공학과 공지',
  2: '코로나 공지',
  3: '학생 공지',
  4: '일반 공지',
  5: '인턴 및 대외활동 공지',
};
const CurPageList = {
  1: '공지사항',
  2: '졸업학점 계산기',
  3: '',
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

  useEffect(() => {
    setCurInfo(1);
  }, [curPage]);

  const InfoPage = () => {
    switch (curPage) {
      case 1:
        return (
          <InfoTabsContainer
            className="site-layout-content"
            setCurInfofn={setCurInfofn}
          ></InfoTabsContainer>
        );
      case 2:
        return isLogined ? (
          <GraduateInfo
            className="site-layout-content"
            history={history}
          ></GraduateInfo>
        ) : (
          <Col lg={12} xs={24} md={12} sm={16}>
            <GraduateForm className="site-layout-content"></GraduateForm>
          </Col>
        );
      case 3:
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <FAQ />
          </div>
        );
    }
  };

  return (
    <>
      <Layout className="layout">
        <Navigator onClick={onClickPage}></Navigator>
        <Content
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Breadcrumb style={{ margin: '24px 24px 24px 24px' }}>
            <Breadcrumb.Item>{CurPageList[curPage]}</Breadcrumb.Item>

            {curPage === 1 && (
              <Breadcrumb.Item>{infoList[curInfo]}</Breadcrumb.Item>
            )}
            {curPage === 2 && <Breadcrumb.Item>{'졸업학점'}</Breadcrumb.Item>}
          </Breadcrumb>
          {InfoPage()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
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
