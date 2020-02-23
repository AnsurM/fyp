import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Header from "components/Headers/IssueHeader.jsx";
import Table from "components/Tables/Datatable.jsx";
// import MDTable from "components/Tables/MDDatatable.jsx";

import { api, adminRoutes } from "../../../axios";

export default class AllCertificates extends Component {
  state = {
    data: {
      columns: [
        {
          id: "RollNumber",
          label: "Roll No",
          colSize: "30px"
        },
        {
          id: "FullName",
          label: "Full Name",
          colSize: "50px"
        },
        // {
        //   id: "FathersName",
        //   label: "Fathers Name",
        //   colSize: "50px"
        // },
        {
          id: "MajorDepartment",
          label: "Major",
          colSize: "40px"
        },
        {
          id: "Program",
          label: "Program",
          colSize: "40px"
        },
        {
          id: "CGPA",
          label: "CGPA",
          colSize: "40px"
        },
        {
          id: "YOG",
          label: "Year",
          colSize: "40px"
        }
      ],
      rows: []
    }
  };

  getCertificatesFromBackend = () => {
    let { data } = this.state;
    let that = this;
    api.get(adminRoutes.allCertificates).then(res => {
      data.rows = res.data.data;
      this.setState({ data });
    });
  };

  componentDidMount() {
    this.getCertificatesFromBackend();
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
