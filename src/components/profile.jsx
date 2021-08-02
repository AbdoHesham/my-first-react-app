import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import SideBar from "../shared/SideBar/side-bar";
import UserInformation from "./user-information";

class Profile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <SideBar />
            </div>
            <div className="col-10">
              <Redirect from="/profile" to="/profile/userinfo" />

              <Route path="/profile/userinfo" component={UserInformation} />
            </div>
            <h1>profile</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
