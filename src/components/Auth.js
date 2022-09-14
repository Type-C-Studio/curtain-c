import {Navbar, Container} from 'react-bootstrap';
import mainLogo from'../photos/Mantarin_haus_logo.png';
import React from "react"
import { Form, Input } from 'antd';


const Auth=()=> {

const  onSubmit =(value) =>{
    console.log(value)
  
  }
  
  return (
    <div>
      <Navbar className="color-nav" variant="light" >
        <Container >
          <Navbar.Brand  href="#home" style={{color: "white"}}>
            <img
              alt=""
              src={mainLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Curtain-C @ Mantarin-Haus
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    <div className="Auth-form-container" style={{textAlign: "center"}}>
      <Form className="Auth-form" onFinish={onSubmit}>
      {/* <form className="Auth-form" onSubmit={onSubmit} > */}
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In to Curtain-C</h3>
          <div style={{textAlign: "center"}}>
          <img src={mainLogo} width='50%' />
          </div>
          <div className="form-group mt-3" style={{textAlign: "left"}}>
            <label>Username</label>
            <Form.Item name="username">
              <Input placeholder="Enter Username" className="form-control mt-1"/>
            </Form.Item>
            {/* <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter Username"
            /> */}
          </div>
          <div className="form-group mt-3" style={{textAlign: "left"}}>
            <label>Password</label>
            <Form.Item name="password">
              <Input placeholder="Enter Password" type='password' className="form-control mt-1"/>
            </Form.Item>
            {/* <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            /> */}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-danger">
              Login
            </button>
            
          </div>
          
        </div>
        
      </Form>
    </div>
    </div>
  );
}
export default Auth;