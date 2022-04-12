import React from 'react'
import Tabla from '../../components/Tabla/Tabla'
import {
  Button,
  Card,
  Table,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

export default function AministrarUsuario() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Administrar Usuarios</CardTitle>
              <Row>
                <Col>
                  <a className="btn btn-primary" href="/admin/usuario/nuevo">Nuevo</a>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <Card className="card-plain">
                    <CardHeader>
                      <CardTitle tag="h5">Lista de Usuarios</CardTitle>
                    </CardHeader>
                    <CardBody>
                      {/*Crear tabla */}
                      
                      <Tabla/>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
