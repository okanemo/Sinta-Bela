import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="#home">Sinta Bela</a>
        </div>

        

        <BackTop />
      </div>
    </div>
  );
}

export default AppFooter;