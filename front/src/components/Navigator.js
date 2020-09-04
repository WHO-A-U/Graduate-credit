import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
const Navigator = ({ onClick }) => {
  return (
    <Header sm={12}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ minWidth: '300px' }}
        onClick={onClick}
      >
        <Menu.Item key="1" title="1">
          공지사항
        </Menu.Item>
        <Menu.Item key="2" title="2">
          졸업학점 계산기
        </Menu.Item>
        <Menu.Item key="3" title="3">
          FAQ
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navigator;
