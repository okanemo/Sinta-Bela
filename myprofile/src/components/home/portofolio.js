import React from 'react';
import heroku from '../../assets/images/heroku.jpg';
import figma from '../../assets/images/figmaIcon.jpg';
import github from '../../assets/images/githubIcon.jpg';

import { List, Card, Button } from 'antd';

const data = [
  {
    title: 'Heroku Personal Website',
    content: [
      {
        logo: <img src={heroku} /> ,
        space: 'Personal website for web designing and programming lecture',
        user: 'https://gitlab.com/Belaady/lab_1',

      }
    ]
  },
  {
    title: 'Design Portofolio',
    content: [
      {
        logo: <img src={figma} /> ,
        space: 'My design portofolio made with figma',
        user: 'https://bit.ly/37rAMmL',

      }
    ]
  },
  {
    title: 'Github',
    content: [
      {
        logo: <img src={github} /> ,
        space: 'My Github for projects',
        user: 'https://github.com/Belaady',

      }
    ]
  }
];

function AppPortofolio() {
  return (
    <div id="portofolio" className="block portoBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Portofolio</h2>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <image className="large">{item.content[0].logo}</image>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppPortofolio;