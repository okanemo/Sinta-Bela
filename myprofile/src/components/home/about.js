import React from 'react';
import mail from '../../assets/images/mail.jpg';
import linked from '../../assets/images/linkedIn.jpg';
import insta from '../../assets/images/insta.jpg';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <a href="mailto:sintabelaa@gmail.com"><img src={mail} /></a> ,
    title: 'Mail',

  },
  {
    key: '2',
    icon: <a href="https://www.linkedin.com/in/sinta-bela-damayanti-787765187/"><img src={linked} /></a>,
    title: 'LinkedIn',
    
  },
  {
    key: '3',
    icon: <a href="https://instagram.com/belaa.dy?igshid=rw8j7nhzete8"><img src={insta} /></a>,
    title: 'Instagram',
    
  },
]

function AppAbout() {
  return (
    <div  data-testid="about" id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <br></br>
          <h2>About Me</h2>
          
        </div>
        <div className="contentHolder">
          <p>I am a people-person who have an IT background with extensive experiences in public relations. I can work with both groups and individuals. I have a good interpersonal skills and strong willingness to learn, which makes me eager to be challenged in order to grow and further improve my skills.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;