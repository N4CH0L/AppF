import React from 'react'

export default function Roles() {
  return (
    <div>
      <input type="checkbox" name="Administrador" id="Administrador" /> <label htmlFor="Administrador">Administrador</label>
      <br />
      <input type="checkbox" name="Usuario" id="Usuario" /> <label htmlFor="Usuario">Usuario</label>
      <br />
      <input type="checkbox" name="Moderador" id="Moderador" /> <label htmlFor="Moderador">Moderador</label>
      <br />
      <input type="checkbox" name="Encargado" id="Encargado" /> <label htmlFor="Encargado">Encargado</label>
      <br />
      <input type="checkbox" name="Operario" id="Operario" /> <label htmlFor="Operario">Operario</label>
    </div>
  )
}
