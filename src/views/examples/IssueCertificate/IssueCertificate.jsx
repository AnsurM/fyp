import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Header from "components/Headers/IssueHeader.jsx";
import IssueForm from "components/Forms/IssueCertificateForm.jsx";

import { api, adminRoutes } from "../../../axios";
import Swal from "sweetalert2";

const Joi = require("@hapi/joi");

const schema = Joi.object({
  CGPA: Joi.number()
    .min(1.8)
    .max(4.0)
    .required(),
  FullName: Joi.string()
    .min(2)
    .required(),
  MajorDepartment: Joi.string()
    .valid("BSCS", "BSSE")
    .required(),
  Program: Joi.string()
    .valid("Morning", "Evening")
    .required(),
  RollNumber: Joi.string()
    .min(9)
    .max(9)
    .required(),
  YOG: Joi.number()
    .integer()
    .min(1896)
    .max(2020)
    .required()
});

export default class IssueCertificate extends Component {
  state = {
    err: ""
  };

  onSubmitForm = async data => {
    try {
      const value = await schema.validateAsync(data);
      let rollNum = data.RollNumber;
      console.log(Number(rollNum.substring(1, rollNum.length)));
      if (
        value &&
        rollNum &&
        (!rollNum.substring(0, 1) == "B" ||
          !(Number(rollNum.substring(1, rollNum.length)) >= 1) ||
          !(Number(rollNum.substring(1, rollNum.length)) <= 19999999))
      ) {
        this.setState({ err: "Roll number must be of the type: B1XXXXXXX" });
        return;
      }
      api
        .post(adminRoutes.issueCertificate, { ...data })
        .then(res => {
          console.log(res);
          Swal.fire("Success", "Certificate successfully issued.", "success");
        })
        .catch(err => {
          console.log(err);
          Swal.fire("Error", "Issue Certificate Failed.", "error");
        });
    } catch (err) {
      console.log("Schema error is: ", err);
      this.setState({ err });
    }
  };

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container fluid>
          <Row className="mt--5">
            <Col xl="3"></Col>
            <Col xl="6">
              <div className="issue-form-margin">
                <IssueForm
                  onSubmitForm={this.onSubmitForm}
                  err={this.state.err}
                />
              </div>
            </Col>
            <Col xl="3"></Col>
          </Row>
        </Container>
      </>
    );
  }
}
