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
import TablaTipoMaquinaria from 'components/tipoDeMaquinas/TablaTipoMaquinaria';

export default function AdministrarTipoMaquinaria() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Administrar Tipos de Máquina</CardTitle>
              <a className="btn btn-success" href="/tipodemaquina/tipodemaquinas/nuevo"><i class="fa-solid fa-plus"></i> Nuevo</a>
              </CardHeader>
              </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Listado de Tipos de Máquinaria</CardTitle>
  
              </CardHeader>
              <CardBody>
                <TablaTipoMaquinaria />
              </CardBody>
            </Card>
          </Col>
  
        </Row>
      </div>
    )
  }
