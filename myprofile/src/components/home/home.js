import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Hello !',
    content: "Welcome to my page. This is my first personal website using Ant of Design React! This might not be as good as others but it's not that bad either, right?",
  },
  {
    key: '2',
    title: 'Take it easy and simple',
    content: "Obviously I didn't make this myself. Thanks to stackoverflow, google, youtube, and friends for helping me understanding and developing this website easier",
  },

]

function AppMain() {
  return (
    <div id="home" className="homeBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} onClick={()=>{alert("Welcome!")}} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppMain;