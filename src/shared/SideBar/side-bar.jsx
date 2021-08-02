import React, { Component } from "react";
import {Link}from'react-router-dom'
import { Nav } from "react-bootstrap";
// import { withRouter } from "react-router";
import './side-bar.css'
class SideBar extends Component {
  state = {};
  render() {
    return (
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Link to="/profile/userinfo">user info</Link>
        </Nav.Item>

      </Nav>
    );
  }
}
// const Side = withRouter(SideBar);

export default SideBar;
