import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateEmployee from './components/create-employee.component'
import EditEmployee from './components/edit-employee.component'
import EmployeeList from './components/employee-list.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-employee'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-employee'} className="nav-link">
                    Create Employee
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/employee-list'} className="nav-link">
                    Employee List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/create-employee"
                    component={(props) => <CreateEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-employee/:id"
                    component={(props) => <EditEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/employee-list"
                    component={(props) => <EmployeeList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
