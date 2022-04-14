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

export default function AministrarMarcas() {
  return (
    <div className="content">
      <link rel="stylesheet" type="text/css" href="DataTables/datatables.min.css" />

      <script type="text/javascript" src="DataTables/datatables.min.js"></script>
        <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Simple Table</CardTitle>
              <Row>
                <Col >
                  <a className="btn btn-primary" href="/admin/marca/nueva" >Nuevo</a>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col >
                  <div class="input-group col-4 row justify-content-between row align-items-end">
                    <input 
                     
                        type="search" 
                        class="form-control rounded" 
                        placeholder="Buscar" 
                        aria-label="Buscar" 
                        aria-describedby="search-addon" />
                    <button 
                      type="button" 
                      class="btn btn-outline-primary nc-icon nc-zoom-split "></button>
                  </div>
                </Col>
              </Row>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th className="ml-auto">Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <a className='btn btn-primary nc-icon nc-ruler-pencil ' href='/admin/marca/editar'></a>
                      <button className='btn btn-danger nc-icon nc-basket'></button>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <a className='btn btn-primary nc-icon nc-ruler-pencil ' href='/admin/marca/editar'></a>
                      <button className='btn btn-danger nc-icon nc-basket'></button>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <a className='btn btn-primary nc-icon nc-ruler-pencil ' href='/admin/marca/editar'></a>
                      <button className='btn btn-danger nc-icon nc-basket'></button>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <a className='btn btn-primary nc-icon nc-ruler-pencil ' href='/admin/marca/editar'></a>
                      <button className='btn btn-danger nc-icon nc-basket'></button>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <a className='btn btn-primary nc-icon nc-ruler-pencil ' href='/admin/marca/editar'></a>
                      <button className='btn btn-danger nc-icon nc-basket'></button>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <a className='btn btn-primary nc-icon nc-ruler-pencil ' href='/admin/marca/editar'></a>
                      <button className='btn btn-danger nc-icon nc-basket'></button>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <a className='btn btn-primary nc-icon nc-ruler-pencil ' href='/admin/marca/editar'></a>
                      <button className='btn btn-danger nc-icon nc-basket'></button>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
  

  )
}
