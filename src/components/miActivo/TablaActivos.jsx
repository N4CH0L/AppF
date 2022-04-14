import React from 'react'
import DataTables from '../utilidades/DataTables'

import { response } from '../../views/misActivos/response';
import { Fragment } from 'react/cjs/react.production.min';

export default function TablaActivos() {
    const columnas = () =>{
        return(
            <tr>
                <th>Id</th>
                <th>Imegen</th>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        )
    }

    const data = () => {
        return(
            <Fragment>
                {response.data.map((dato, index) =>{
                    return(
                        <tr key={index}>
                            {console.log(dato.anime_id)}
                            <td>{dato.anime_id}</td>
                            <td> <img src={dato.anime_img} alt="" /></td>
                            <td>{dato.anime_name}</td>
                            <td>
                                <a className='btn btn-primary fa-regular fa-pen no-padding' href='/admin/activo/editar'></a>
                                <a className='btn btn-danger fa-regular fa-trash no-padding' href="/"></a>
                            </td>
                        </tr>

                )})}
            </Fragment>
        )
    }


    return (
            <DataTables
                data={data()}
                columnas={columnas()}
                params={{
                    
                }}
            /> 
    )
}
