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

  const enviar = () => {
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
    let errors = {}
    setError({})
    if (tag.length === 0) {
      errors = { ...errors, tag: 'Este campo es obligatorio' }
    }
    if (ubicacion.length === 0) {
      errors = { ...errors, ubicacion: 'Este campo es obligatorio' }
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
          {Object.keys(error).length>0 && <div class="alert alert-danger alert-dismissible show" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button><span><b>Error - </b>Algunos campos presentan errores, debe corregirlos primero.</span></div>}
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
                  <label htmlFor="FechaFinGarantia">Fecha Fin Garantia</label>
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
                <a href="#" onClick={enviar} className="btn btn-primary btn-form"><i className="fa-solid fa-check"></i> Guardar</a>
                <a href="/" className="btn btn-danger btn-form"><i className="fa-solid fa-ban"></i> Cancelar</a>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>

  )
}
