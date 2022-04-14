import React from 'react'
import FormNuevoTipoMaquina from './FormNuevoTipoMaquina'
import { useState } from "react";

export default function ContFormEditarTipoMaquinaria() {
    //Editar tipo de maquinaria
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
  
  return (
    <div>
        <FormNuevoTipoMaquina
          tituloNombre = "Editar Tipo de Maquinaria"
          nombre = {nombre}
          setNombre = {setNombre}
          descripcion = {descripcion}
          setDescripcion = {setDescripcion}
        />
    </div>
  )
}
