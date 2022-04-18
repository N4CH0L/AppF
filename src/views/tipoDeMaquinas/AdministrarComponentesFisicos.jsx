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
import TablaComponenteFisico from 'components/tipoDeMaquinas/TablaComponenteFisico';

export default function AdministrarComponentesFisicos() {
  return (

    <div className="content">
     <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Administrar Componentes Físicos</CardTitle>
              <a className="btn btn-success" href="/admin/tipodemaquinas/nuevo"><i class="fa-solid fa-plus"></i> Nuevo</a>
            </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Listado de Componentes Físicos</CardTitle>
  
              </CardHeader>
              <CardBody>
                <TablaComponenteFisico />
              </CardBody>
            </Card>
          </Col>
  
        </Row>
      </div>
    )
  }
