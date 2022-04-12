import React from 'react'
import FormCrearLineaProducción from './FormCrearLineaProducción'
import { useState } from "react";

export default function ContFormNuevaLineaProduccion() {
   //Nueva linea de produccion
   const [activo, setActivo] = useState(["activo1", "activo2"]);
   const [nombre, setNombre] = useState('');
   const [descripcion, setDescripcion] = useState('');

  return (
    <div>
        <FormCrearLineaProducción
          tituloNombre = 'Editar Linea de Producción'
          activo = {activo}
          setActivo = {setActivo}
          nombre ={nombre}
          setNombre = {setNombre}
          descripcion = {descripcion}
          setDescripcion = {setDescripcion}
        />
    </div>
  )
}
