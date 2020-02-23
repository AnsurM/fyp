/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import InstituteLayout from "layouts/Institute.jsx";
import StudentLayout from "layouts/Student.jsx";

require("./index.css");

ReactDOM.render(
  <>
    <div id="myLoader">
      <img
        id="loader-image"
        src={require("./assets/img/icons/common/UoK.png")}
        alt="loader"
      />
    </div>
    <HashRouter>
      <Switch>
        <Route
          path="/institute"
          render={props => <InstituteLayout {...props} />}
        />
        <Route path="/student" render={props => <StudentLayout {...props} />} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Redirect from="/" to="/auth/login" />
        {/* <Redirect from="/*" to="/auth/login/student" /> */}
        {/* <Redirect from="/auth" to="/auth/login/student" /> */}
        <Route render={() => <Redirect to="/auth/login/student" />} />
      </Switch>
    </HashRouter>
  </>,
  document.getElementById("root")
);
