import React from 'react'
import FormNuevaMarca from './FormNuevaMarca'
import { useState } from "react";

export default function ContFormNuevaMarca() {
   //NuevaMarca
   const [nombre, setNombre] = useState('');
   const [descripcion, setDescripcion] = useState('');
   
  return (
    <div>
      <FormNuevaMarca
          nombreTitulo= "Crear Marca"
          nombre = {nombre}
          setNombre = {setNombre}
          descripcion = {descripcion}
          setDescripcion = {setDescripcion}
       
      />
    </div>
  )
}
