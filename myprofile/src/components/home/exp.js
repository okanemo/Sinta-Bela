import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppExp() {
  const sistem = 
  [
    'Maintain SISTEM’s digital channels such as Line, Instagram, & Linkedin',
    'Responsible for managing the SISTEM’s podcast called POBSI'
  ];

  const uiux = 
  [
    'Responsible for the design and implementation of all the experiences a user has when interacting with a digital tool, such as a website.',
    'Responsible for implementing visual elements that users see and interact within a web application.',
    'Design and create company’s profile'
  ];

  const event = 
  [
    'Manage all event set-up, tear down and follow-up processes',
    'Booking venues and schedule speakers',
    'Planning for potential scenarios that could impact the integrity of the event',
    'Creating reliable financial reports and collecting payments on time'
  ];

  const marketing = 
  [
    'Work closely with the Executive Director',
    'Collect quantitative and qualitative data ',
    'Create and maintain company’s social media',
    'Participate in developing website for one of the company’s projects'
  ];

  const hr = 
  [
    'Schedule and confirm interviews with candidates',
    'Prepare HR-related reports as needed',
    'Participate in organizing events'
  ];

  const publicRelation = 
  [
    'Manage and update media lists and databases',
    'provide assistance in scheduling and coordinating of different events',
    'Communicating and building relationships with current or prospect clients'
  ];






  return(
    <div id="exp" className="block expBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <br></br>
          <h2>EXPERIENCE</h2>
        </div>
        <div className="App">
      <header className="App-header">
        
      </header>
    </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="VICE MANAGER OF PUBLIC RELATION" key="1">
            <h5>SISTEM FASILKOM UI | Depok | Feb 2020 - Present</h5>
                <ul> 
                {
                  sistem.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))
                }
              </ul>
          </Panel>
          <Panel header="UI/UX DESIGNER INTERN" key="2">
            <h5>Pandu Pintar Multifokus | Menteng | Jul 2020 - Sep 2020</h5>
              <ul> 
              {
                uiux.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))
              }
            </ul>
          </Panel>
          <Panel header="HEAD OF EVENTS" key="3">
            <h5>BETIS FASILKOM UI | Depok | Jul 2019 - Jul 2020</h5>
              <ul> 
                {
                  event.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))
                }
              </ul>
          </Panel>
          <Panel header="MARKETING INTERN " key="4">
            <h5>Value Plus Solution | Kuningan | Feb 2020 - Jun 2020</h5>
            <ul> 
                {
                  marketing.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))
                }
              </ul>
          </Panel>
          <Panel header="HRD OF DIRECT MARKETING" key="5">
          <h5>COMPFEST | Depok | Jan 2019 - Jan 2020</h5>
              <ul> 
                {
                  hr.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))
                }
              </ul>
          </Panel>
          <Panel header="STAFF OF PUBLIC RELATION" key="6">
          <h5>Computers Get Together | Depok | Jan 2019 - May 2019</h5>
              <ul> 
                {
                  publicRelation.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))
                }
              </ul>
          </Panel>
        </Collapse>
        
      </div>
    </div>  
  );
}

export default AppExp;
