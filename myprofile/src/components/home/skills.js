import React from 'react';

import image1 from '../../assets/images/Java.jpg';
import image2 from '../../assets/images/Python.jpg';
import image3 from '../../assets/images/Postgre.jpg';
import image4 from '../../assets/images/Spring.jpg';
import image5 from '../../assets/images/Django.jpg';
import image6 from '../../assets/images/Github.jpg';
import image7 from '../../assets/images/Basic.jpg';
import image8 from '../../assets/images/Figma.jpg';
import image9 from '../../assets/images/Adobe.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppSkills() {
  return (
    <div id="skills" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <br></br>
          <h2>SKILLS</h2>
          <br></br>
          
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Java" src={image1} />}
            >
              <Meta title="Java" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Python" src={image2} />}
            >
              <Meta title="Python" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="PostgreSQL" src={image3} />}
            >
              <Meta title="PostgreSQL" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Spring" src={image4} />}
            >
              <Meta title="Spring" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Django" src={image5} />}
            >
              <Meta title="Django" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Github" src={image6} />}
            >
              <Meta title="Github" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Basic Web Development" src={image7} />}
            >
              <Meta title="Basic Web Development" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Figma" src={image8} />}
            >
              <Meta title="Figma" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Adobe Photoshop" src={image9} />}
            >
              <Meta title="Adobe Photoshop" />
            </Card>
          </Col>
        </Row>
      </div>


    </div>
  );
}

export default AppSkills;