import React from 'react';

import AppMain from '../components/home/home';
import AppAbout from '../components/home/about';
import AppSkills from '../components/home/skills';
import AppWorks from '../components/home/works';
import AppExp from '../components/home/exp';
import AppPorto from '../components/home/portofolio';
import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppMain/>
      <AppAbout/>
      <AppSkills/>
      <AppWorks/>
      <AppExp/>
      <AppPorto/>
      <AppContact/>
    </div>
  );
}

export default AppHome;