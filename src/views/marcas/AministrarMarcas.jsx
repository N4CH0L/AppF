import React from 'react'


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


import TablaMarca from 'components/marcas/TablaMarca';

export default function AministrarMarcas() {
  return (
    <div className="content">

      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Administrar Marca</CardTitle>
              <a className="btn btn-success" href="/admin/marca/nueva" ><i class="fa-solid fa-plus"></i> Nueva</a>
            </CardHeader>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Listado de Marcas</CardTitle>

            </CardHeader>
            <CardBody>
              <TablaMarca />
            </CardBody>
          </Card>
        </Col>

      </Row>
    </div>
  )
}
