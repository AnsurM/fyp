import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

export default class IssueCertificateForm extends React.Component {
  state = {
    data: {}
  };

  onEnterDetails = e => {
    const { id, value } = e.target;
    let { data } = this.state;

    data[id] = value;

    this.setState({ data });
  };

  onClickSubmit = () => {
    console.log(this.state.data);
  };

  onClickResetForm = () => {
    let { data } = this.state;

    let keys = Object.keys(data);
    keys.forEach(key => {
      document.getElementById(key).value = "";
    });
    document.getElementById("fullname").focus();
  };

  render() {
    return (
      <Card className="shadow">
        <CardHeader className="bg-transparent">
          <Row className="align-items-center">
            <div className="col align-items-center">
              <div style={{ textAlign: "center" }}>
                <h2 className="mb-0">Issue Certificate</h2>
              </div>
            </div>
          </Row>
        </CardHeader>
        <CardBody>
          <Form ref={e => (this.formRef = e)}>
            <Row>
              <Col md="1"></Col>
              <Col md="4" className="mb-2 text-center">
                Full Name
              </Col>
              <Col md="1"></Col>
              <Col md="1"></Col>
              <Col md="4" className="mb-2 text-center">
                Roll Number
              </Col>
              <Col md="1"></Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="fullname"
                    placeholder="Full Name"
                    type="text"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="rollno"
                    placeholder="Regular"
                    type="text"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="1"></Col>
              <Col md="4" className="mb-2 text-center">
                Major Department
              </Col>
              <Col md="1"></Col>
              <Col md="1"></Col>
              <Col md="4" className="mb-2 text-center">
                Program
              </Col>
              <Col md="1"></Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="major"
                    placeholder="name@example.com"
                    type="email"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="program"
                    placeholder="Regular"
                    type="text"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="3"></Col>
              <Col md="6 text-center">
                <Button color="info" onClick={this.onClickSubmit}>
                  Submit
                </Button>
                <Button color="danger" onClick={this.onClickResetForm}>
                  Reset
                </Button>
              </Col>
              <Col md="3"></Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
