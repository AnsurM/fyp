import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Header from "components/Headers/IssueHeader.jsx";
import IssueForm from "components/Forms/IssueCertificateForm.jsx";

import { api, adminRoutes } from "../../../axios";
import Swal from "sweetalert2";

export default class IssueCertificate extends Component {
  onSubmitForm = data => {
    console.log(data);
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
                <IssueForm onSubmitForm={this.onSubmitForm} />
              </div>
            </Col>
            <Col xl="3"></Col>
          </Row>
        </Container>
      </>
    );
  }
}
