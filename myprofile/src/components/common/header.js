import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="https://line.me/ti/p/d-4cUMDC9j">Belaady</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#home" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#skills" title="Skill" />
            <Link href="#experience" title="Experience" />
            <Link href="#portofolio" title="Portofolio" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#home" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#skills" title="Skills" />
              <Link href="#experience" title="Experience" />
              <Link href="#portofolio" title="Portofolio" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;