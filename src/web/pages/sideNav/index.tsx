import { List } from "antd";
import { 
    AppstoreOutlined, 
    UserOutlined, 
    LaptopOutlined, 
    SettingOutlined, 
    LogoutOutlined 
  } from '@ant-design/icons';
import "./style.scss";

const Navbar: React.FC = () => {
  return (
    <div className="nav-section">
      <List style={{width: '100%'}}>
        <List.Item className="list-item">
            <p><AppstoreOutlined style={{display: 'inline-flex'}}/></p></List.Item>
        <List.Item className="list-item">
            <p><UserOutlined /></p></List.Item>
        <List.Item className="list-item">
            <p><LaptopOutlined /></p></List.Item>
        <List.Item className="list-item">
            <p><SettingOutlined /></p></List.Item>
        <List.Item className="list-item">
            <p><LogoutOutlined /></p></List.Item>
      </List>
    </div>
  );
};

export default Navbar;
