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
import TablaUsuario from 'components/usuarios/TablaUsuario';

export default function AministrarUsuario() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Administrar Usuarios</CardTitle>
              <a className="btn btn-success" href="/admin/usuario/nuevo"><i class="fa-solid fa-plus"></i> Nuevo</a>
            </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Listado de Usuarios</CardTitle>
              </CardHeader>
              <CardBody>
                <TablaUsuario />
              </CardBody>
            </Card>
          </Col>
  
        </Row>
      </div>
    )
  }
