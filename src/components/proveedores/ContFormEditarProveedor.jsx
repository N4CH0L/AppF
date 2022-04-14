import React from 'react'
import FormNuevoProveedor from './FormNuevoProveedor'
import { useState } from "react";

export default function ContFormEditarProveedor() {
  //NuevoProveedor
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [marcasTrabajadas, setMarcasTrabajadas] = useState(['Marca1', 'Marca2']);

  return (
    <div>
      <FormNuevoProveedor
        tituloNombre = 'Editar Proveedor'
        nombre={nombre}
        setNombre={setNombre}
        telefono={telefono}
        setTelefono={setTelefono}
        direccion={direccion}
        setDireccion={setDireccion}
        marcasTrabajadas={marcasTrabajadas}
        setMarcasTrabajadas={setMarcasTrabajadas}

      />
    </div>
  )
}
