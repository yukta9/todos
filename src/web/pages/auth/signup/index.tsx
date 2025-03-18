import { Col, Form, Row, Input, Button, Typography, Select } from "antd";
import mySVG from "../../../../assets/sign.svg";
import "./style.scss";
import { appAction } from "../../../../store/Store";

const { Text } = Typography;

const Login: React.FC = () => {
  const signUp = appAction(action => action.AuthModel.signUpThunk);
  return (
    <div className="container">
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img src={mySVG} style={{ width: "100%", height: "auto" }} />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} className="form-container">
          <Row>
            <Col xs={24}>
              <h1 style={{ textAlign: "center", margin: '0px' }}>
                Sign Up
              </h1>
            </Col>
            <Col xs={24}>
              <Text
                type="secondary"
                style={{
                  fontSize: "14px",
                  marginBottom: "20px",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Create your account become a member of to-dos application
              </Text>
            </Col>

            <Form
              style={{ width: "100%", paddingLeft: '5px'}}
              layout="vertical"
              onFinish={(values) => signUp(values)}
            >
              <Row>
                <Col xs={24} sm={24} md={12} lg={12} className="col-padding">
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} className="col-padding">
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} className="col-padding">
                <Form.Item
                                    label="Gender"
                                    name="gender"
                                    rules={[{ required: true, message: "Please select your gender!" }]}
                                >
                                    <Select placeholder="Select your gender">
                                        <Select.Option value="male">Male</Select.Option>
                                        <Select.Option value="female">Female</Select.Option>
                                        <Select.Option value="other">Other</Select.Option>
                                    </Select>
                                </Form.Item>
                </Col>
                <Col xs={24} className="col-padding">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email" },
                      {
                        type: "email",
                        message: "The input is not valid E-mail",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} className="col-padding">
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: "Please input your password" },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col xs={24} className="col-padding">
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col xs={24} className="col-padding">
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block style={{marginTop: '10px'}}>
                      Create Account
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
