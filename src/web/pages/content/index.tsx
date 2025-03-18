import { Col, Row } from 'antd';
import { UpOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './style.scss'

import { useState } from 'react';
import { Link } from 'react-router-dom';


const Options = ['Complete 1 Array questions', 'Complete 10 Array questions', 'Complete 11 Array questions', 'Complete 12 Array questions']; 
const Content: React.FC = () => {
    const [dropdown, setDropdown] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleClick = () => {
        setDropdown(prev => !prev);
    };

    const handleCheckboxChange = (option: string) => {
        setSelectedOptions(prev =>
            prev.includes(option)
                ? prev.filter(item => item !== option) // Remove if already selected
                : [...prev, option] // Add if not selected
        );
    };

    return(
        <div className="content-section">
           
            <div>
                <Row>
                    <Col xs={24}>
                        <p style={{paddingLeft: '8px', fontSize: '16px'}}>Today <span onClick={handleClick} style={{ 
        display: 'inline-block', 
        transition: 'transform 0.3s ease', 
        transform: `rotate(${dropdown ? 180 : 0}deg)` // Corrected rotation logic
      }}><UpOutlined /></span> </p>
                    </Col>
                </Row>
                {dropdown && 
                    Options.map(option => (
                        <Row className='row-option'>
                            <Col xs={1}>
                               <input type='checkbox' checked={selectedOptions.includes(option)} onChange={() => handleCheckboxChange(option)} />
                            </Col>
                            <Col xs={21}> 
                                <Link to={'/task-details'}> <span>{option}</span></Link>
                            </Col>
                            <Col xs={1}> <CheckCircleOutlined  /></Col>
                        </Row>
                    ) )
                }
            </div>

            {/* {dropdown && <div className="dropdown-container"> 
                {Options.map(option => (
                        <Row style={{marginBottom: '12px'}}>
                            <Col xs={1}>
                            <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                    </Col>
                            <Col xs={21}>
                            <span className="option-text">{option}</span></Col>
                            <Col xs={2}><CheckCircleOutlined className="option-icon" /></Col>
                        </Row>
                    ))}
                </div>} */}
        </div>
    )
}

export default Content;