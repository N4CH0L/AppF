import React from 'react'
import FormNuevoTipoMaquina from './FormNuevoTipoMaquina'
import { useState } from "react";

export default function ContFormNuevoTipoMaquinaria() {
  //Nuevo tipo de maquinaria
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  return (
    <div>
      <FormNuevoTipoMaquina
        nombre={nombre}
        setNombre={setNombre}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
      />
    </div>
  )
}
