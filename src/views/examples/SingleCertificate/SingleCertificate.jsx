import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col,Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

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
                  {/* <img
                    className="degree-image"
                    src={require("../../../assets/img/icons/common/degree.jpg")}
                  /> */}
                  <Card style={{width:"60%"}}>
                  <CardImg width="100%" src={require("../../../assets/img/icons/common/degree.jpg")} alt="Card image cap" />
                  <CardImgOverlay>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                  </CardImgOverlay>
                  </Card>
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
