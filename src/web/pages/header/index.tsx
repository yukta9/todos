import { Avatar, Col, Row } from "antd"
import { UserOutlined } from "@ant-design/icons";
import './style.scss'

const Header: React.FC = () => {
    return (
        <div className="header-section">
            <Row>
                <Col xs={23} style={{display: 'flex'}}>
                    <h1 style={{paddingLeft: '8px'}}>To-Dos</h1>
                </Col>
                <Col xs={1} style={{display: 'flex', alignItems: 'center'}}>
                    {/* <Avatar /> */}
                    <Avatar size={50} icon={<UserOutlined />} style={{backgroundColor: 'transparent'}}/>
                </Col>
            </Row>
        </div>
    )
} 

export default Header;