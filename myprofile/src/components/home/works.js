import React from 'react';

import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <br></br>
            <h2>Bachelor of Computer Science</h2>
            <p>Universitas Indonesia, Depok</p>
            <p>2018-2022</p>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default AppWorks;