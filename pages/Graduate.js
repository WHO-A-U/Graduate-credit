import React, { useState } from 'react';
import InfoTabs from './InfoTabs';
import { Form, Input, Button, Checkbox, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Graduate = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onAdmissionChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        return;
    }
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelAlign="left"
    >
      <Form.Item
        label="학번"
        name="userid"
        rules={[{ required: true, message: '클래스넷 학번을 입력해주세요!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
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
        <Select
          placeholder="입학년도를 선택해주세요"
          onChange={onAdmissionChange}
          allowClear
        >
          <Option value="2015">2015</Option>
          <Option value="2016">2016</Option>
          <Option value="2018">2018</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Graduate;
