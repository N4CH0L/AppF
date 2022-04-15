import React from "react";
import { useState } from "react";

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
  Alert,
} from "reactstrap";


export default function FormNuevaMarca({
  nombre,
  setNombre,
  descripcion,
  setDescripcion,
  nombreTitulo,
  setnombreTitulo }) {

  const [error, setError] = useState({});


  const enviar = () => {
    if (validar()) {
      var context = {
        nuevaMarca: {
          nombre: nombre,
          descripcion: descripcion
        }
      }
      console.log(context)
    }

  }

  const validar = () => {
    let errors = {}
    setError({})
    if (nombre.length === 0) {
      errors = { ...errors, nombre: 'Este campo es obligatorio' }
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
          <CardTitle tag="h5">{nombreTitulo}</CardTitle>
        </CardHeader>
        <CardBody>
          {Object.keys(error).length > 0 && <div class="alert alert-danger alert-dismissible show" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button><span><b>Error - </b>Algunos campos presentan errores, debe corregirlos primero.</span></div>}
          <Form onSubmit={enviar}>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Nombre">Nombre</label>
                  <Input
                    id='Nombre'
                    type="text"
                    value={nombre}
                    className={"form-control" + (error.nombre && " is-invalid")}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  {error.nombre && <small className="text-danger">{error.nombre}</small>}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>

                  <label htmlFor="Descripcion">Descripción</label> <small> - Opcional</small>
                  <Input
                    id='Descripcion'
                    type="textarea"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <a href="#" onClick={enviar} className="btn btn-primary btn-form"><i className="fa-solid fa-check"></i> Guardar</a>
              <a href="/" className="btn btn-danger btn-form"><i className="fa-solid fa-ban"></i> Cancelar</a>
            </Row>
          </Form>
        </CardBody>
      </Card>

    </div>

  )
}