import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import Recaptcha from 'react-recaptcha';
const { TextArea } = Input;


  class AppContact extends React.Component {
    constructor(props){
      super(props)

      this.state={
        isVerified: false
      }
      this.handleSubmit= this.handleSubmit.bind(this);
      this.recaptchaLoaded= this.recaptchaLoaded.bind(this)
      this.verifyCallback= this.verifyCallback.bind(this)
    }

    handleSubmit(){
      if(this.state.isVerified){
        alert('You have successfully submit!');
      } else{
        alert('Please verify that you are a human!');
      }
    }

    recaptchaLoaded(){
      console.log('capcha successfully loaded');
    }

    verifyCallback(response){
      if(response){
        this.setState({
          isVerified:true
        })
      }
    }

    

    render(){
    return (
      <div id="contact" className="block contactBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Get in Touch</h2>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="fullname"
              rules={[
                { 
                  required: true,
                  message: 'Please enter your full name!' 
                }]
              }
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder="Email Address"/>
            </Form.Item>
            <Form.Item
              name="telephone"
            >
              <Input placeholder="Telephone" />
            </Form.Item>
            <Form.Item
              name="subject"
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="message"
            >
              <TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Form.Item 
                name="remember" 
                valuePropName="checked"
                noStyle
                rules={[
                  { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                ]}
              >
                <Checkbox>I agree with terms and conditions.</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                Submit
              </Button>
              
            </Form.Item>
          
              <Recaptcha
                sitekey="6Ld2IQEaAAAAACefDJVSPiMPhkpYHOlhMdYk7z6J"
                render="explicit" 
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
              />
          </Form>

        </div>
      </div>  
    );
  }
}


export default AppContact;