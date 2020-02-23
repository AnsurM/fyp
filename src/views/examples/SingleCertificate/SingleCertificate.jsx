import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import { api, studentRoutes } from "../../../axios";

import Header from "components/Headers/StudentHeader.jsx";
import Swal from "sweetalert2";

export default class SingleCertificate extends Component {
  state = {
    data: {}
  };

  getCertificateFromBackend = () => {
    api
      .get(studentRoutes.getCertificate + localStorage.getItem("rollnumber"))
      .then(res => {
        if (res.data.data) {
          console.log(res.data.data);
          this.setState({ data: res.data.data });
        } else
          Swal.fire(
            "Error fetching certificate",
            "Cannot get your certificate. PLease contact admin for support.",
            "error"
          );
      });
  };

  componentDidMount() {
    this.getCertificateFromBackend();
  }

  render() {
    const { data } = this.state;
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
                  <div className="degree-box">
                    <img
                      className="degree-image"
                      src={require("../../../assets/img/icons/common/degree-clean.png")}
                    />
                    <h1 className="rollnumber">{data.RollNumber}</h1>
                    <h1 className="name">{data.FullName}</h1>
                    <h1 className="fathers-name">{data.FathersName}</h1>
                    <h1 className="graduation-left">{data.YOG}</h1>
                    <h1 className="name graduation-right">{data.YOG}</h1>
                    <h1 className="grad-class">FIRST</h1>
                  </div>
                  {/* <Card style={{ width: "60%" }}>
                    <CardImg
                      width="100%"
                      src={require("../../../assets/img/icons/common/degree.jpg")}
                      alt="Card image cap"
                    />
                    <CardImgOverlay>
                      <CardTitle>Card Title</CardTitle>
                      <CardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </CardText>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardImgOverlay>
                  </Card> */}
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
