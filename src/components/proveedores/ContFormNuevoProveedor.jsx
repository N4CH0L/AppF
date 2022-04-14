import React from 'react'
import FormNuevoProveedor from './FormNuevoProveedor'
import { useState } from "react";

export default function ContFormNuevoProveedor() {
  //NuevoProveedor
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [marcasTrabajadas, setMarcasTrabajadas] = useState(['Marca1', 'Marca2']);

  return (
    <div>
      <FormNuevoProveedor
        tituloNombre = 'Crear Proveedor'
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
