import React from "react";
import { useState } from "react";
import Roles from '../../components/usuarios/Roles'
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

export default function FormNuevoUsuario({
  username,
  setUsername,
  email,
  setEmail,
  contrasenia,
  setContrasenia,
  tituloNombre }) {

  const [error, setError] = useState({})

  const enviar = () => {
    if (validar()) {
      var context = {
        nuevoUsuario: {
          username: username,
          email: email,
          const: contrasenia
        }
      }
      console.log(context)
    }
  }

  const validar = () => {
    let errors = {}
    setError({})
    if (username.length === 0) {
      errors ={...errors, username: 'Este campo es obligatorio' }
    }

    if (email.length === 0) {
      errors ={ ...errors, email: 'Este campo es obligatorio' }
    }

    if (contrasenia.length === 0) {
      errors ={ ...errors, contrasenia: 'Este campo es obligatorio' }
    }

    if (Object.keys(errors).length === 0) {
      setError({})
      return true;
    } else {
      setError(errors)
      return false;
    }

  }

  return (
    <div className="content">
      <Card className="card-user">
        <CardHeader>
          <CardTitle tag="h5">{tituloNombre}</CardTitle>
        </CardHeader>
        <CardBody>
        {Object.keys(error).length>0 && <div class="alert alert-danger alert-dismissible show" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button><span><b>Error - </b>Algunos campos presentan errores, debe corregirlos primero.</span></div>}
          <Form onSubmit={enviar}>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Username">Nombre de Usuario</label>
                  <Input
                    id='Username'
                    type="text"
                    className={"form-control" + (error.username && " is-invalid")}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                   {error.username && <small className="text-danger">{error.username}</small>}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Email">Email</label>
                  <Input
                    id='Email'
                    type="email"
                    value={email}
                    className={"form-control" + (error.email && " is-invalid")}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error.email && <small className="text-danger">{error.email}</small>}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Contrasenia">Contraseña</label>
                  <Input
                    id='Contrasenia'
                    type="password"
                    className={"form-control" + (error.contrasenia && " is-invalid")}
                    value={contrasenia}
                    onChange={(e) => setContrasenia(e.target.value)}
                  />
                   {error.contrasenia && <small className="text-danger">{error.contrasenia}</small>}
                </FormGroup>
                <input type="checkbox" name="Habilitado" id="Habilitado" /> <label htmlFor="Habilitado">Habilitado</label>
                <br />
              </Col>
            </Row>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Roles</CardTitle>
              </CardHeader>
              <Row>
                <Col className="pr-1" md="6">
                  <Roles />
                </Col>
              </Row>
              <Row>
                <a href="#" onClick={enviar} className="btn btn-primary btn-form"><i className="fa-solid fa-check"></i> Guardar</a>
                <a href="/" className="btn btn-danger btn-form"><i className="fa-solid fa-ban"></i> Cancelar</a>
            </Row>
            </Card>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
