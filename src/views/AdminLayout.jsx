/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch } from "react-router-dom";

// assets

// pages
import Index from "views/Index";
import GalleryPage from "views/GalleryPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="">
          <Switch>
            <Route path="/admin/home" component={Index} />
            <Route path="/admin/gallery" component={GalleryPage} />
            <Route path="/admin/team" render={() => <ProfilePage />} />
            <Route
              path="/admin/contact"
              render={() => <Index getContact={1} />}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default Admin;
