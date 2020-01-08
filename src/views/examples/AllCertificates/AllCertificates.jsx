import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Header from "components/Headers/IssueHeader.jsx";
import Table from "components/Tables/Datatable.jsx";
// import MDTable from "components/Tables/MDDatatable.jsx";

export default class AllCertificates extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    let data = {
      columns: [
        {
          id: "rollno",
          label: "Roll No",
          colSize: "30px"
        },
        {
          id: "fullname",
          label: "Full Name",
          colSize: "50px"
        },
        {
          id: "major",
          label: "Major",
          colSize: "40px"
        },
        {
          id: "program",
          label: "Program",
          colSize: "40px"
        },
        {
          id: "cgpa",
          label: "CGPA",
          colSize: "40px"
        },
        {
          id: "year",
          label: "Year",
          colSize: "40px"
        }
      ],
      rows: [
        {
          cgpa: "3.0",
          fullname: "Syed Ansur Mehdi",
          major: "BSCS",
          program: "Morning",
          rollno: "B15101134",
          year: "2020"
        }
      ]
    };

    let myTempData = localStorage.getItem("results")
      ? JSON.parse(localStorage.getItem("results"))
      : [];
    if (myTempData.length) {
      data.rows = myTempData;
    }
    this.setState({ data });
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
                className="bg-white"
                style={{
                  height: `${Math.floor(window.innerHeight * 0.8)}px`,
                  borderRadius: "10px"
                }}
              >
                <Table data={this.state.data} />
              </div>
            </Col>
            {/* <Col xl="1"></Col> */}
          </Row>
        </Container>
      </>
    );
  }
}
