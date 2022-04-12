import React from 'react'
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
} from "reactstrap";
export default function FormNuevoTipoMaquina({
  nombre,
  setNombre,
  descripcion,
  setDescripcion}) {
  const [error, setError] = useState({})

  const enviar = (e) => {
    e.preventDefault();
    if (validar()){
      var context = {
        nuevoTipoMaquinaria: {
          nombre: nombre,
          descripcion: descripcion,
        }
      }
      console.log(context)
    }
  }

  const validar = () => {
    setError({})
    if (nombre.length === 0) {
      setError({ ...error, nombre: 'Este campo es obligatorio' })
    }

    if (Object.keys(error).length === 0) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div className="content">
      <Card className="card-user">
        <CardHeader>
          <CardTitle tag="h5">{tituloNombre}</CardTitle>
        </CardHeader>
        <CardBody>
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
                  <label htmlFor="Descripcion">Descripción</label>
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
              <Col>
                <input class="btn btn-primary" type="submit" value="nueva" />
                <input class="btn btn-danger" type="submit" value="Cancelar" />
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
