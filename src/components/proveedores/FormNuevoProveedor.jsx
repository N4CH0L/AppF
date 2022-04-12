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
} from "reactstrap";

export default function FormNuevoProveedor({
  nombre,
  setNombre,
  telefono,
  setTelefono,
  direccion,
  setDireccion,
  marcasTrabajadas,
  setMarcasTrabajadas,
  tituloNombre}) {
 
  const [error, setError] = useState({});

  const enviar = (e) => {
    e.preventDefault();
    if(validar()){
      var context = {
        nuevoProveedor: {
          nombre: nombre,
          telefono: telefono,
          direccion: direccion,
          marcasTrabajadas: marcasTrabajadas
        }
      }
      console.log(context)
    }
    
  }

  const validar = () => {
    setError({})
    if (nombre.length === 0) {
      setError({...error, nombre: 'Este campo es obligatorio'})
    }

    if(Object.keys(error).length === 0){
      return false;
    }else{
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
                  <label htmlFor="Telefono">Teléfono</label>
                  <Input
                    id='Telefono'
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="Direccion">Dirección</label>
                  <Input
                    id='Direccion'
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
              <FormGroup>
                  <label htmlFor="MarcasTrabajadas">Marcas Trabajadas</label>
                  <select
                    className="form-control"
                    name="MarcasTrabajadas"
                    id="MarcasTrabajadas"
                  >
                    {marcasTrabajadas.map(function (tipo, key) {
                      return (
                        <option key={key}>{tipo}</option>
                      );

                    })}

                  </select>
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
