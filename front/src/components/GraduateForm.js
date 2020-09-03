import React, { useCallback, useEffect } from "react";
import { Form, Input, Button, Select, Spin } from "antd";
import PropTypes from "prop-types";
import { useDispatch, connect } from "react-redux";
import { LOGIN_FAIL } from "../modules/MyHistory";
import { getHistory } from "../modules/MyHistory";
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const formStyle = {
  height: "400px",
  width: "500px",
};

const GraduateForm = ({ isLoading, loginFailure, getHistory }) => {
  const dispatch = useDispatch();
  const onSubmitForm = useCallback((output) => {
    getHistory(output.userid, output.password, output.admissionYear);
  }, []);

  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (loginFailure === true) {
      alert("로그인 실패 학번과 비밀번호를 확인해주세요");
      dispatch({ type: LOGIN_FAIL });
      onReset();
    }
  });

  return (
    <Spin spinning={isLoading} tip="Loading ... ">
      <Form
        form={form}
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
          rules={[{ required: true, message: "클래스넷 학번을 입력해주세요!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="mypwishere!!!"
          label="Password"
          name="password"
          rules={[
            { required: true, message: "클래스넷 비밀번호를 입력해주세요" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="admissionYear"
          label="입학년도"
          rules={[{ required: true, message: "필수선택사항 입니다" }]}
        >
          <Select placeholder="입학년도를 선택해주세요" allowClear>
            <Option value="2010">2010</Option>
            <Option value="2011">2011</Option>
            <Option value="2012">2012</Option>
            <Option value="2013">2013</Option>
            <Option value="2014">2014</Option>
            <Option value="2015">2015</Option>
            <Option value="2016">2016</Option>
            <Option value="2017">2017</Option>
            <Option value="2018">2018</Option>
            <Option value="2019">2019</Option>
            <Option value="2020">2020</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};
GraduateForm.propTypes = {
  isLoading: PropTypes.bool,
  loginFailure: PropTypes.bool,
  getHistory: PropTypes.func,
};
export default connect(
  ({ myHistory }) => ({
    isLogined: myHistory.isLogined,
    isLoading: myHistory.isLoading,
    loginFailure: myHistory.loginFailure,
  }),
  { getHistory }
)(GraduateForm);
