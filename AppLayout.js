import React, { useState, useRef } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import App from './App';
import InfoTabs from './pages/InfoTabs';
import Graduate from './pages/Graduate';
import GraduateInfo from './pages/GraduateInfo';
const { Header, Content, Footer } = Layout;
const layoutStyle = {
  display: 'flex',
  justifyContent: 'center',
};
const AppLayout = () => {
  const [page, setPage] = useState(1);

  const onClickPage = (item) => {
    setPage(parseInt(item.key, 10));
  };

  const subPage = () => {
    if (page === 1) {
      return <InfoTabs></InfoTabs>;
    } else {
      return (
        // <div style={layoutStyle}>
        //   <Graduate></Graduate>
        // </div>
        <GraduateInfo></GraduateInfo>
      );
    }
  };
  return (
    <>
      <Layout className="layout">
        <Header>
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
        </Header>
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
