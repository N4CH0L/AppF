/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

