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

export default function FormCrearLineaProducción({
  nombre,
  setNombre,
  descripcion,
  setDescripcion,
  activo,
  setActivo,
  tituloNombre}) {
    
  const [error, setError] = useState({})

  const enviar = (e) => {
    e.preventDefault();
    if (validar()) {
      var context = {
        NuevaLineaProduccion: {
          nombre: nombre,
          descripcion: descripcion,
          activo: activo,
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
                  <label htmlFor="Nombre" >Nombre</label>
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
                  <textarea
                    id='Descripcion'
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="form-control"
                  >
                  </textarea>
                 
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Activo">Activo</label>
                  <select
                    className="form-control"
                    name="Activo"
                    id="Activo"
                  >
                    {activo.map(function (tipo, key) {
                      return (
                        <option key={key}>{tipo}</option>
                      );

                    })}

                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="2">
                <input className="btn btn-primary btn-block" type="submit" value="nueva" />
              </Col>
              <Col xs="2">
                <a href="/" className="btn btn-danger btn-block">Cancelar</a>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
