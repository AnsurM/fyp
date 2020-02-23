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
  Input
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

  onClickSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.data);
  };

  onClickResetForm = () => {
    let { data } = this.state;

    let keys = Object.keys(data);
    keys.forEach(key => {
      document.getElementById(key).value = "";
    });
    document.getElementById("FullName").focus();
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
                Fathers Name
              </Col>
              <Col md="1"></Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="FullName"
                    placeholder="Full Name"
                    required
                    type="text"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="FathersName"
                    placeholder="Fathers Name"
                    required
                    type="text"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="1"></Col>
              <Col md="4" className="mb-2 text-center">
                Roll Number
              </Col>
              <Col md="1"></Col>
              <Col md="1"></Col>
              <Col md="4" className="mb-2 text-center">
                Major Department
              </Col>
              <Col md="1"></Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="RollNumber"
                    required
                    placeholder="B15XXXXXX"
                    type="text"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="MajorDepartment"
                    required
                    placeholder="BSCS/BSSE"
                    type="text"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="1"></Col>
              <Col md="4" className="mb-2 text-center">
                Program
              </Col>
              <Col md="1"></Col>
              <Col md="1"></Col>
              <Col md="4" className="mb-2 text-center">
                CGPA
              </Col>
              <Col md="1"></Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="Program"
                    required
                    placeholder="Morning/Evening"
                    type="text"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="CGPA"
                    required
                    placeholder="3.0"
                    min={1.8}
                    min={4.0}
                    type="number"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="2"></Col>
              <Col md="8" className="mb-2 text-center">
                Year of Graduation
              </Col>
              <Col md="2"></Col>
            </Row>
            <Row>
              <Col md="3" />
              <Col md="6">
                <FormGroup>
                  <Input
                    id="YOG"
                    required
                    placeholder="2024"
                    min={1896}
                    min={2020}
                    type="number"
                    onChange={this.onEnterDetails}
                  />
                </FormGroup>
              </Col>
              <Col md="3" />
            </Row>

            <Row>
              <Col md="3"></Col>
              <Col md="6 text-center">
                <Button
                  type="submit"
                  color="primary"
                  onClick={this.onClickSubmit}
                >
                  Submit
                </Button>
                <Button color="" onClick={this.onClickResetForm}>
                  Reset
                </Button>
              </Col>
              <Col md="3"></Col>
            </Row>
            {this.props.err && (
              <p style={{ color: "red", paddingTop: "10px" }}>
                {this.props.err.toString().replace("ValidationError: ", "")}
              </p>
            )}
          </Form>
        </CardBody>
      </Card>
    );
  }
}
