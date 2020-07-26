import React, { useState, useRef } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import App from './App';
import InfoTabs from './pages/InfoTabs';
const { Header, Content, Footer } = Layout;
const AppLayout = () => {
  const [page, setPage] = useState(1);

  const onClickInfoPage = (e) => {
    setPage(1);
  };
  const onClickGraduatePage = (e) => {
    setPage(2);
  };

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" onClick={onClickInfoPage}>
              공지사항
            </Menu.Item>
            <Menu.Item key="2" onClick={onClickGraduatePage}>
              졸업학점 계산기
            </Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {page === 1 ? <InfoTabs></InfoTabs> : 0}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>This is Footer</Footer>
      </Layout>
    </>
  );
};
export default AppLayout;
