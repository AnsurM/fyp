import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Header from "components/Headers/IssueHeader.jsx";
import IssueForm from "components/Forms/IssueCertificateForm.jsx";

export default class IssueCertificate extends Component {
  onSubmitForm = data => {
    console.log(data);
    let myOldData = localStorage.getItem("results")
      ? JSON.parse(localStorage.getItem("results"))
      : [];
    if (myOldData) {
      myOldData.push(data);
    }
    console.log(myOldData);
    if (myOldData.length) {
      localStorage.setItem("results", JSON.stringify(myOldData));
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
