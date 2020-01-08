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
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-top navbar-horizontal navbar-dark"
          expand="md"
        >
          <Container className="px-4">
            <NavbarBrand to="/" tag={Link} onClick={e => e.preventDefault()}>
              <img src={require("assets/img/icons/common/diploma.svg")} />
              <img
                style={{ marginLeft: "10px" }}
                alt="..."
                // src={require("assets/img/brand/argon-react-white.png")}
                // src={require("assets/img/icons/common/diploma.svg")}
                // src={require("assets/img/icons/common/ourlogo1.png")}
                src={require("assets/img/icons/common/ourlogo1.png")}
                // src={require("assets/img/icons/common/blockedu.png")}
              />
              {/* <span className="nav-link-inner--text">
                Blockchain Certification System
              </span> */}
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar-collapse-main">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
              <div className="navbar-collapse-header d-md-none">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
                        // src={require("assets/img/icons/common/diploma.svg")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar-collapse-main"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                {/* <NavItem>
                  <NavLink className="nav-link-icon" to="/" tag={Link}>
                    <i className="ni ni-planet" />
                    <span className="nav-link-inner--text">Dashboard</span>
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/login/institute"
                    tag={Link}
                  >
                    <i className="ni ni-building" />
                    <span className="nav-link-inner--text">Institute</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/login/student"
                    tag={Link}
                  >
                    <i className="ni ni-hat-3" />
                    <span className="nav-link-inner--text">Student</span>
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/admin/user-profile"
                    tag={Link}
                  >
                    <i className="ni ni-single-02" />
                    <span className="nav-link-inner--text">Profile</span>
                  </NavLink>
                </NavItem> */}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
