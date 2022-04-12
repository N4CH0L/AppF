import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "../../data";

import "../../assets/css/styles.css";

export default function Tabla () {
    const tableData = {
      columns,
      data
    };
  
    return (
        <DataTableExtensions {...tableData}>
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
            responsive = {true}
          />
        </DataTableExtensions>
    );
  }
  
  