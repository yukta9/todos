import { Col, Form, Row, Input, Button, Typography} from "antd";
import mySVG from "../../../../assets/sign.svg";
import "./style.scss";
import { appAction } from "../../../../store/Store";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const Signin: React.FC = () => {
  const signIn = appAction(action => action.AuthModel.signInThunk);
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
  const response = await signIn(values); 
 
  if (response?.data.auth) {
    localStorage.setItem("userData", JSON.stringify(response));
    console.log(response);
    
    navigate("/dashboard");
  }
  };

  return (
    <div className="container">
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img src={mySVG} style={{ width: "100%", height: "auto" }} />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} className="signform-container">
          <Row>
            <Col xs={24}>
              <h1 style={{ textAlign: "center", margin: "0px" }}>Sign In</h1>
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
                Sign in using your email and password
              </Text>
            </Col>

            <Form
              style={{ width: "100%", paddingLeft: "5px" }}
              layout="vertical"
              // onFinish={(values) => signIn(values)}
              onFinish={handleSubmit}
            >
              <Row>
                <Col xs={24} className="col-padding">
                  <Form.Item
                    label="User ID"
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
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ marginTop: "10px" }}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Col>
                <Col xs={24} style={{textAlign: 'center'}} >
                  <span className="forgot-password">Forgot password ?</span>
                </Col>
                <Col xs={24} style={{marginTop: '10px'}}>
                  <p style={{textAlign:'center'}}>Still without account ? <span style={{color: '#75BAFF'}}> Create one</span> </p>
                </Col>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
