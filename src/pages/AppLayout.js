import React, { useState, useRef, useCallback } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import App from '../../App';
import InfoTabs from './InfoTabs';
import Graduate from './Graduate';
import GraduateInfo from './GraduateInfo';
import Navigator from './Navigator';
import { dummy } from './dummy';
const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  const [page, setPage] = useState(1);
  const [isLogined, setIsLogined] = useState(true);
  const onClickPage = useCallback((item) => {
    setPage(parseInt(item.key, 10));
  }, []);

  const UserLogin = useCallback(() => {
    setIsLogined(true);
  }, []);
  const subPage = () => {
    if (page === 1) {
      return (
        <InfoTabs
          studentContentList={dummy.studentContentList}
          normalContentList={dummy.normalContentList}
          computerContentList={dummy.computerContentList}
        ></InfoTabs>
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
          <Graduate UserLogin={UserLogin}></Graduate>
        </div>
      );
    }
  };
  return (
    <>
      <Layout className="layout">
        {/* <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            onClick={onClickPage}
          >
            <Menu.Item key="1" title="1">
              공지사항
            </Menu.Item>
            <Menu.Item key="2" title="2">
              졸업학점 계산기
            </Menu.Item>
          </Menu>
        </Header> */}
        <Navigator onClick={onClickPage}></Navigator>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{subPage()}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>This is Footer</Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
