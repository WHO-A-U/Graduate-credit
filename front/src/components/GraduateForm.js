import React, { useCallback } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useInput } from '../lib/useInput';
import myHistory, { GET_HISTORY_REQUEST } from '../modules/myHistory';
import { getHistory } from '../modules/myHistory';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const formStyle = {
  height: '400px',
  width: '500px',
};

const GraduateForm = ({ isLogined, getHistory }) => {
  const onSubmitForm = useCallback((output) => {
    console.log(output);
    getHistory(output.userid, output.password);
  }, []);

  return (
    <Form
      {...layout}
      name="studentForm"
      labelAlign="left"
      initialValues={{ remember: true }}
      onFinish={onSubmitForm}
      size="middle"
      style={formStyle}
    >
      <Form.Item
        label="학번"
        name="userid"
        rules={[{ required: true, message: '클래스넷 학번을 입력해주세요!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className="mypwishere!!!"
        label="Password"
        name="password"
        rules={[
          { required: true, message: '클래스넷 비밀번호를 입력해주세요' },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="입학년도"
        label="admissionYear"
        rules={[{ required: true, message: '필수선택사항 입니다' }]}
      >
        <Select placeholder="입학년도를 선택해주세요" allowClear>
          <Option value="2015">2015</Option>
          <Option value="2016">2016</Option>
          <Option value="2018">2018</Option>
        </Select>
      </Form.Item>
      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(
  ({ myHistory }) => ({
    isLogined: myHistory.isLogined,
  }),
  { getHistory }
)(GraduateForm);
