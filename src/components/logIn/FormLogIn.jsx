import React from 'react'
import { useState } from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export default function FormLogIn() {
  const [userName, setUserName] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    var context = {
      logIn: {
        userName: userName,
        contrasenia: contrasenia
      }
    }
    console.log(context)
  }
  return (
    <div className="content">
      <Card className="card-user">
        <CardHeader>
          <CardTitle tag="h5">Por favor inicie sesión</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={enviar}>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="UserName">Username</label>
                  <Input
                    id='UserName'
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    id='Contrasenia'
                    value={contrasenia}
                    onChange={(e) => setContrasenia(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <a class="btn btn-primary " href="/LogIn">Ingresar</a>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>

    </div>
  )
}
