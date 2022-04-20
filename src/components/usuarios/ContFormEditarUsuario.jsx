import React from 'react'
import FormNuevoUsuario from './FormNuevoUsuario'
import { useState } from "react";

export default function ContFormEditarUsuario() {
  //Editar Usuario
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  return (
    <div  className="content">
      <FormNuevoUsuario
        tituloNombre = ""
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        contrasenia={contrasenia}
        setContrasenia={setContrasenia}

      />
    </div>
  )
}
