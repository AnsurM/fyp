import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Header from "components/Headers/IssueHeader.jsx";
import IssueForm from "components/Forms/IssueCertificateForm.jsx";

export default class IssueCertificate extends Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--36" fluid>
          <Row className="mt--5">
            <Col xl="3"></Col>
            <Col xl="6">
              <IssueForm />
            </Col>
            <Col xl="3"></Col>
          </Row>
        </Container>
      </>
    );
  }
}
