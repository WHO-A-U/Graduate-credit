import React, { useState, useRef, useCallback } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import App from '../../App';
import InfoTabs from './InfoTabs';
import Graduate from './Graduate';
import GraduateInfo from './GraduateInfo';
import Navigator from './Navigator';
import { dummy } from './dummy';
const { Header, Content, Footer } = Layout;

// const dummy = {
//   isLogined: false,
//   normalContentList: ['NormalContent공지1', '공asdfasdfadf지2', '공지3'],
//   studentContentList: ['StudentContent공지1', 'asdfasdfsdf2', 'adfadfadf공지3'],
//   computerContentList: ['computercontent1', '공asdfasdfadfds지1', '공지2'],
//   myhistory: [],
//   myGraduateInfo: [],
// };
const AppLayout = () => {
  const [page, setPage] = useState(1);

  const onClickPage = useCallback((item) => {
    setPage(parseInt(item.key, 10));
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
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Graduate></Graduate>
        </div>
        // <GraduateInfo></GraduateInfo>
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
