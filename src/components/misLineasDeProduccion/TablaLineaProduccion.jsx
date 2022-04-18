import React, { useState, useEffect } from 'react'
import DataTables from '../utilidades/DataTables'

import { Fragment } from 'react/cjs/react.production.min';

import axios from 'axios';

export default function TablaLineaProduccion() {
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

    const columnas = () => {
        return (
            <tr>
                <th>Nombre</th>
                <th>descripción</th>
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

