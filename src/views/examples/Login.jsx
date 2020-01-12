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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

import { api, adminRoutes, studentRoutes } from "../../axios";
import Swal from "sweetalert2";

class Login extends React.Component {
  state = {
    credentials: {},
    pathName: "",
    userType: ""
  };

  onInputCredentials = e => {
    const { id, value } = e.target;
    let myCredentials = this.state.credentials;
    myCredentials[id] = value;
    this.setState({ credentials: myCredentials });
  };

  onSubmitCredentials = e => {
    e.preventDefault();
    let { credentials, userType } = this.state;
    if (userType == "institute") {
      let { email: username, password } = credentials;
      api
        .post(adminRoutes.login, { username, password })
        .then(res => {
          if (res.data.message == "authorized") {
            this.props.history.push("/institute/issue-certificate");
          }
        })
        .catch(err => {
          Swal.fire(
            "Error logging in.",
            "Please check your credentials and try again.",
            "error"
          );
          console.log(err.resp);
        });
    } else if (userType == "student") {
      let { rollnumber } = credentials;
      api
        .post(studentRoutes.login, { rollnumber })
        .then(res => {
          if (res.data.message == "authorized") {
            // Swal.fire("Success", "Successfully logged in.", "success");
            this.props.history.push(`/student/certificate?id=${rollnumber}`);
          } else {
            Swal.fire(
              "Error logging in.",
              "Re-check your credentials and try again please.",
              "error"
            );
          }
        })
        .catch(err => {
          console.log(err);
          Swal.fire(
            "Error logging in.",
            "Re-check your credentials and try again please.",
            "error"
          );
        });
    }
  };

  determineView = () => {
    const path = this.props.history.location.pathname;
    if (path) {
      const pathValues = path.split("/");
      if (pathValues[1] == "auth" && pathValues[3] == "student") {
        this.setState({ userType: "student" });
      } else if (pathValues[1] == "auth" && pathValues[3] == "institute") {
        this.setState({ userType: "institute" });
      } else {
        this.setState({ userType: "student" }, () => {
          this.props.history.push("/auth/login/student");
        });
      }
    }
  };

  setRender = () => {
    const setView = this.state.userType;
    if (setView) {
      if (setView == "institute") {
        return (
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent">
                <div className="text-muted text-center mt-2">
                  <small>Welcome to Institute Portal</small>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    className="login-school-img"
                    alt="..."
                    src={require("assets/img/icons/common/school.svg")}
                  />
                </div>
              </CardHeader>
              <CardBody className="px-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        ref={elem => (this.emailField = elem)}
                        id="email"
                        placeholder="Email"
                        type="email"
                        onChange={this.onInputCredentials}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="password"
                        placeholder="Password"
                        type="password"
                        onChange={this.onInputCredentials}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button
                      ref={elem => (this.signInButton = elem)}
                      className="my-4"
                      color="primary"
                      type="button"
                      onClick={this.onSubmitCredentials}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        );
      } else if (setView == "student") {
        return (
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent">
                <div className="text-muted text-center mt-2">
                  <small>Welcome to Student Portal</small>
                </div>
                <div className="btn-wrapper text-center">
                  <img
                    className="login-school-img"
                    alt="..."
                    src={require("assets/img/icons/common/student.svg")}
                  />
                </div>
              </CardHeader>
              <CardBody className="px-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Select institution and enter roll no:</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-building" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        ref={elem => (this.emailFieldStudent = elem)}
                        id="institute"
                        placeholder="institute"
                        type="select"
                        name="select"
                        onChange={this.onInputCredentials}
                      >
                        <option value="UoK">University of Karachi</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-paper-diploma" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="rollnumber"
                        placeholder="Roll no"
                        type="text"
                        onChange={this.onInputCredentials}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button
                      ref={elem => (this.signInButtonStudent = elem)}
                      className="my-4"
                      color="primary"
                      type="button"
                      onClick={this.onSubmitCredentials}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        );
      } else {
        return <h2>404 Not Found</h2>;
      }
    } else {
      return <h2>404 Not Found</h2>;
    }
  };

  static getDerivedStateFromProps = (props, state) => {
    if (props.history.location.pathname != state.pathName) {
      const path = props.history.location.pathname.split("/");
      return {
        ...state,
        pathName: props.history.location.pathname,
        userType: path[path.length - 1]
      };
    }
    return null;
  };

  componentDidMount() {
    this.setState(
      { pathName: this.props.history.location.pathname },
      () => {
        this.determineView();
      },
      () => {
        setTimeout(() => {
          // Execute a function when the user releases a key on the keyboard
          this.emailField.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
              this.signInButton.click();
            }
          });

          this.emailFieldStudent.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
              this.signInButtonStudent.click();
            }
          });
        }, 500);
      }
    );
  }

  render() {
    return this.setRender();
  }
}

export default Login;
