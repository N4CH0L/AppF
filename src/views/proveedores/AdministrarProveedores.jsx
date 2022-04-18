import React from 'react'
import Tabla from '../../components/Tabla/Tabla'
import {

  Card,
  Table,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import TablaProveedor from 'components/proveedores/TablaProveedor';

export default function AdministrarProveedores() {
  return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Listado de Proveedores</CardTitle>
                <a className="btn btn-success" href="/admin/proveedor/nuevo"><i class="fa-solid fa-plus"></i> Nueva</a>
              </CardHeader>
              </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Listado de Proveedores</CardTitle>
  
              </CardHeader>
              <CardBody>
                <TablaProveedor />
              </CardBody>
            </Card>
          </Col>
  
        </Row>
      </div>
    )
  }
