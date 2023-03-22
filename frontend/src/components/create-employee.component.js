import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateEmployee extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeEmpno = this.onChangeEmployeeEmpno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      empno: ''
    }
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeEmployeeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeEmployeeEmpno(e) {
    this.setState({ empno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const employeeObject = {
      name: this.state.name,
      email: this.state.email,
      empno: this.state.empno
    };
    axios.post('http://localhost:4000/employees/create-employee', employeeObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', empno: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeEmployeeName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmployeeEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.empno} onChange={this.onChangeEmployeeEmpno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Employee
        </Button>
      </Form>
    </div>);
  }
}