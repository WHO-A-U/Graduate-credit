import React from 'react';
import { Spin } from 'antd';

const Loading = ({ load }) => {
  return load === false ? <></> : <Spin tip="loading"></Spin>;
};

export default Loading;
