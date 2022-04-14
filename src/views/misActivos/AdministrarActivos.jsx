import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import TablaActivos from 'components/miActivo/TablaActivos';

export default function AdministrarActivos() {

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Administrar Activos</CardTitle>
              <a className="btn btn-primary" href="/admin/activo/nuevo">Nuevo</a>
            </CardHeader>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Listado de Activos</CardTitle>

            </CardHeader>
            <CardBody>
              <TablaActivos />
            </CardBody>
          </Card>
        </Col>

      </Row>
    </div>
  )
}
