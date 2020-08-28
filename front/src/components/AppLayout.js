import React, { useState, useCallback } from 'react';
import { Layout, Breadcrumb } from 'antd';
import GraduateForm from './GraduateForm';
import GraduateInfo from './GraduateInfo';
import Navigator from './Navigator';
import { dummy } from './dummy';
import InfoTabsContainer from '../container/InfoTabsContainer';
const { Content, Footer } = Layout;

const AppLayout = () => {
  const [curPage, setCurPage] = useState(1);
  const [isLogined, setIsLogined] = useState(false);
  const [curInfo, setCurInfo] = useState(1);

  const onClickPage = useCallback((item) => {
    setCurPage(parseInt(item.key, 10));
  }, []);

  const UserLogin = useCallback(() => {
    setIsLogined(true);
  }, []);

  const setCurInfofn = useCallback(
    () => (id) => {
      setCurInfo(id);
    },
    []
  );

  const InfoPage = () => {
    if (curPage === 1) {
      return (
        <InfoTabsContainer setCurInfofn={setCurInfofn}></InfoTabsContainer>
      );
    } else {
      return isLogined ? (
        <GraduateInfo history={dummy.myhistory}></GraduateInfo>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <GraduateForm UserLogin={UserLogin}></GraduateForm>
        </div>
      );
    }
  };

  return (
    <>
      <Layout className="layout">
        <Navigator onClick={onClickPage}></Navigator>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              {curPage == 1 ? '공지사항' : '졸업학점 계산기'}
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {curPage == 1 ? curInfo : '졸업학점'}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{InfoPage()}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>This is Footer</Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
