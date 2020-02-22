import React from "react";
import { useForm } from "react-hook-form";

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

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  var formRef;

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

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     type="text"
    //     placeholder="Roll Number"
    //     name="Roll Number"
    //     ref={register({ required: true, maxLength: 9, pattern: "/B+*/i" })}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Full Name"
    //     name="Full Name"
    //     ref={register}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Major Department"
    //     name="Major Department"
    //     ref={register({ required: true, maxLength: 4 })}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Program"
    //     name="Program"
    //     ref={register({ required: true, maxLength: 7 })}
    //   />
    //   <input
    //     type="range"
    //     placeholder="CGPA"
    //     name="CGPA"
    //     ref={register({ required: true, max: 4.0, min: 2 })}
    //   />
    //   <input
    //     type="number"
    //     placeholder="Year of Graduation"
    //     name="Year of Graduation"
    //     ref={register({ required: true, max: 2020, maxLength: 4 })}
    //   />

    //   <input type="submit" />
    // </form>

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
        <Form ref={e => (formRef = e)} onSubmit={handleSubmit(onSubmit)}>
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
                  id="FullName"
                  type="text"
                  placeholder="Full Name"
                  name="Full Name"
                  ref={register}
                  required
                />
                {/* <Input
            id="FullName"
            placeholder="Full Name"
            required
            type="text"
            onChange={this.onEnterDetails}
          /> */}
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                {/* <Input
            id="RollNumber"
            required
            placeholder="B15XXXXXX"
            type="text"
            onChange={this.onEnterDetails}
          /> */}
                <Input
                  type="text"
                  placeholder="Roll Number"
                  name="Roll Number"
                  ref={register({
                    required: true,
                    maxLength: 9,
                    pattern: "/B+*/i"
                  })}
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
                  id="MajorDepartment"
                  required
                  placeholder="BSCS/BSSE"
                  type="email"
                  ref={register({ required: true, maxLength: 4 })}
                  onChange={this.onEnterDetails}
                />
                {/* <input
                  type="text"
                  placeholder="Major Department"
                  name="Major Department"
                  ref={register({ required: true, maxLength: 4 })}
                /> */}
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                {/* <Input
            id="Program"
            required
            placeholder="Morning/Evening"
            type="text"
            onChange={this.onEnterDetails}
          /> */}
                <Input
                  type="text"
                  placeholder="Program"
                  name="Program"
                  ref={register({ required: true, maxLength: 7 })}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="1"></Col>
            <Col md="4" className="mb-2 text-center">
              CGPA
            </Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="4" className="mb-2 text-center">
              Year of Graduation
            </Col>
            <Col md="1"></Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                {/* <Input
            id="CGPA"
            required
            placeholder="3.0"
            type="number"
            onChange={this.onEnterDetails}
          /> */}
                <Input
                  type="range"
                  placeholder="CGPA"
                  name="CGPA"
                  ref={register({ required: true, max: 4.0, min: 2 })}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                {/* <Input
            id="YOG"
            required
            placeholder="2024"
            type="number"
            onChange={this.onEnterDetails}
          /> */}
                <Input
                  type="number"
                  placeholder="Year of Graduation"
                  name="Year of Graduation"
                  ref={register({ required: true, max: 2020, maxLength: 4 })}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="3"></Col>
            <Col md="6 text-center">
              <Button
                type="submit"
                color="primary"
                onClick={() => {
                  document.getElementById("submitButton").click();
                  //   this.onClickSubmit
                }}
              >
                Submit
              </Button>
              <input
                type="submit"
                id="submitButton"
                style={{ display: "none" }}
              />
              <Button
                color=""
                onClick={() => {
                  formRef.reset();
                }}
              >
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
