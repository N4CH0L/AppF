import React, { useState, useEffect } from 'react'
import DataTables from '../utilidades/DataTables'

import { Fragment } from 'react/cjs/react.production.min';

import axios from 'axios';

export default function TablaUsuario() {
    const [list, setList] = useState(false);

    useEffect(() => {
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
        })
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList]);

    const columnas =  () => {
        return (
            <tr>
                <th>Username</th>
                <th>Email</th>
                {/**<th>Status</th>*/}
                <th>Acciones</th>
            </tr>
        )
    }

    const data = () => {

        return (
            <Fragment>
                {list.map((dato, index) => {
                    return (
                        <tr key={index}>
                            <td>{dato.id}</td>
                            <td>{dato.title}</td>
                            <td>
                                <a className='btn btn-primary fa-regular fa-pen no-padding' href='/admin/usuario/editar'></a>
                                <a className='btn btn-info fa-solid fa-eye no-padding' href="/"></a>
                               
                            </td>
                        </tr>

                    )
                })}
            </Fragment>
        )
    }

    const params = () =>{
        return({

        })
    }


    return (
        <Fragment>
            {list && 
                <DataTables
                    data={data()}
                    columnas={columnas()}
                    params={params()}
                />
            }
        </Fragment>

    )
}


