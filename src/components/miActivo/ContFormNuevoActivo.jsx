import React from 'react'
import FormCrearActivo from './FormCrearActivo'
import { useState } from "react";

export default function ContFormNuevoActivo() {
  //nuevo Activo
  const [tag, setTag] = useState('');
  const [nombre, setNombre] = useState('');
  const [nroSerie, setNroSerie] = useState('');
  const [tipoActivo, setTipoActivo] = useState(['TipoActivo1', 'TipoActivo2']);
  const [marca, setMarca] = useState(['Marca1', 'Marca2']);
  const [proveedor, setProveedor] = useState(['Proveedor1', 'Proveedor2']);
  const [ubicacion, setUbicacion] = useState('');
  const [fechaDeCompra, setFechaDeCompra] = useState('');
  const [fechaFinGarantia, setFechaFinGarantia] = useState('');

  return (
    <div>
        <FormCrearActivo
          nombreTitulo = 'Crear Activo'
          tag = {tag}
          setTag = {setTag}
          nombre = {nombre}
          setNombre = {setNombre}
          nroSerie = {nroSerie}
          setNroSerie = {setNroSerie}
          tipoActivo = {tipoActivo}
          setTipoActivo = {setTipoActivo}
          marca = {marca}
          setMarca = {setMarca}
          proveedor = {proveedor}
          setProveedor = {setProveedor}
          ubicacion = {ubicacion}
          setUbicacion = {setUbicacion}
          fechaDeCompra = {fechaDeCompra}
          setFechaDeCompra = {setFechaDeCompra}
          fechaFinGarantia = {fechaFinGarantia}
          setFechaFinGarantia = {setFechaFinGarantia}

        />
    </div>
  )
}
