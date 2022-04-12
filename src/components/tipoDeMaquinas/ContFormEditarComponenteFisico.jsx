import React from 'react'
import FormNuevoComponenteFisico from './FormNuevoComponenteFisico'
import { useState } from "react";

export default function ContFormEditarComponenteFisico() {
  //Editar Componente Fisico
  const [tipoDeMaquina, setTipoDeMaquina] = useState(["maquina1", "maquina2"]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  return (
    <div>
      <FormNuevoComponenteFisico
        tituloNombre = 'Editar Componente Físico'
        tipoDeMaquina={tipoDeMaquina}
        setTipoDeMaquina={setTipoDeMaquina}
        nombre={nombre}
        setNombre={setNombre}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
      />
    </div>
  )
}
