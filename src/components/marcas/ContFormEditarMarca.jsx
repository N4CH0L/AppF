import React from 'react'
import FormNuevaMarca from './FormNuevaMarca'
import { useState } from "react";

export default function ContFormEditarMarca() {
     //Editar Marca
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  
  setDescripcion("Hola")
  return (
    <div>
        <FormNuevaMarca
         nombreTitulo= "Editar Marca"
          nombre = {nombre}
          setNombre = {setNombre}
          descripcion = {descripcion}
          setDescripcion = {setDescripcion}

        />
    </div>
  )
}
