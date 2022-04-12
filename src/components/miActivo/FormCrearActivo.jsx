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

export default function FormCrearActivo({
  nombre, 
  setNombre,
   tag, 
   setTag, 
   nroSerie, 
   setNroSerie, 
   tipoActivo, 
   setTipoActivo, 
   marca, 
   setMarca, 
   proveedor, 
   setProveedor, 
   ubicacion, 
   setUbicacion, 
   fechaDeCompra,
   setFechaDeCompra,
   fechaFinGarantia,
   setFechaFinGarantia,
   nombreTitulo}) {

  const [error, setError] = useState({});

  const enviar = (e) => {
    e.preventDefault();
    if (validar()) {
      var context = {
        nuevaActivo: {
          nombre: nombre,
          tag: tag,
          nroSerie: nroSerie,
          tipoActivo: tipoActivo,
          marca: marca,
          proveedor: proveedor,
          ubicacion: ubicacion,
          fechaDeCompra: fechaDeCompra,
          fechaFinGarantia: fechaFinGarantia
        }
      }
      console.log(context)
    }
  }
  const validar = () => {
    setError({})
    if (tag.length === 0) {
      setError(prevState => ({ ...prevState, tag: 'Este campo es obligatorio' }))
    }
    if (ubicacion.length === 0) {
      setError(prevState => ({ ...prevState, ubicacion: 'Este campo es obligatorio' }))
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
          <CardTitle tag="h5">{nombreTitulo}</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={enviar}>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Tag">Tag</label>
                  <Input
                    id='Tag'
                    type="text"
                    value={tag}
                    className={"form-control" + (error.tag && " is-invalid")}
                    onChange={(e) => setTag(e.target.value)}
                  />
                  {error.tag && <small className="text-danger">{error.tag}</small>}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Nombre">Nombre</label> <small> - Opcional</small>
                  <Input
                    id='Nombre'
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="NroSerie">Nro de Serie</label> <small> - Opcional</small>
                  <input
                    type="number"
                    id='NroSerie'
                    className="form-control"
                    value={nroSerie}
                    onChange={(e) => setNroSerie(e.target.value)}
                  />

                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="TipoActivo">Tipo de activo</label>
                  <select
                    className="form-control"
                    name="TipoActivo"
                    id="TipoActivo"
                  >
                    {tipoActivo.map(function (tipo, key) {
                      return (
                        <option key={key}>{tipo}</option>
                      );

                    })}

                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Marca">Marca</label>
                  <select
                    className="form-control"
                    name="Marca"
                    id="Marca"
                  >
                    {marca.map(function (tipo, key) {
                      return (
                        <option key={key}>{tipo}</option>
                      );

                    })}

                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Proveedor">Proveedor</label> <small> - Opcional</small>
                  <select
                    className="form-control"
                    name="Proveedor"
                    id="Proveedor"
                  >
                    {proveedor.map(function (tipo, key) {
                      return (
                        <option key={key}>{tipo}</option>
                      );

                    })}

                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Ubicacion">Ubicación</label>
                  <Input
                    id='Ubicacion'
                    type="text"
                    value={ubicacion}
                    className={"form-control" + (error.ubicacion && " is-invalid")}
                    onChange={(e) =>setUbicacion(e.target.value)}
                  />
                  {error.ubicacion && <small className="text-danger">{error.ubicacion}</small>}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="FechaCompra">Fecha de Compra</label>
                  <input
                    type="date"
                    id="FechaCompra"
                    className="form-control"
                    value={fechaDeCompra}
                    onChange={(e) => setFechaDeCompra(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="FechaFinGarantia">Fecha de Compra</label>
                  <input
                    type="date"
                    id="FechaFinGarantia"
                    className="form-control"
                    value={fechaFinGarantia}
                    onChange={(e) => setFechaFinGarantia(e.target.value)}
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
