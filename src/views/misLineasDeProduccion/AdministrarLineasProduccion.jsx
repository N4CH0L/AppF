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
import TablaLineaProduccion from 'components/misLineasDeProduccion/TablaLineaProduccion';

export default function AdministrarLineasProduccion() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Administrar Lineas de Producción</CardTitle>
              <a className="btn btn-success" href="/admin/lineadeproduccion/nueva"><i class="fa-solid fa-plus"></i> Nueva</a>
            </CardHeader>
            </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Listado de Lineas de Producción</CardTitle>

            </CardHeader>
            <CardBody>
              <TablaLineaProduccion />
            </CardBody>
          </Card>
        </Col>

      </Row>
    </div>
  )
}
