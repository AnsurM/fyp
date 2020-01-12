import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Header from "components/Headers/StudentHeader.jsx";

import { api, adminRoutes } from "../../../axios";

export default class SingleCertificate extends Component {
  state = {
    data: {}
  };

  getCertificateFromBackend = () => {};

  componentDidMount() {
    this.getCertificateFromBackend();
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="all-cert-margin" fluid>
          <Row className="mt--5">
            {/* <Col xl="1"></Col> */}
            <Col xl="12">
              <div
                className=""
                style={{
                  height: `${Math.floor(window.innerHeight * 0.8)}px`,
                  borderRadius: "10px"
                }}
              >
                <div className="degree-container">
                  <img
                    className="degree-image"
                    src={require("../../../assets/img/icons/common/degree.jpg")}
                  />
                </div>
              </div>
            </Col>
            {/* <Col xl="1"></Col> */}
          </Row>
        </Container>
      </>
    );
  }
}
