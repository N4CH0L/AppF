

import PagFormNuevaMarca from "views/marcas/PagFormNuevaMarca";
import AministrarMarcas from "views/marcas/AministrarMarcas";
import PagFormNuevoProveedor from "views/proveedores/PagFormNuevoProveedor";
import AdministrarProveedores from "views/proveedores/AdministrarProveedores";
import PagFormNuevoUsuario from "views/usuarios/PagFormNuevoUsuario";
import AministrarUsuario from "views/usuarios/AministrarUsuario";
import PagFormNuevoComponenteFisico from "views/tipoDeMaquinas/PagFormNuevoComponenteFisico";
import AdministrarComponentesFisicos from "views/tipoDeMaquinas/AdministrarComponentesFisicos";
import PagFromNuevoTipoMaquina from "views/tipoDeMaquinas/PagFromNuevoTipoMaquina";
import AdministrarTipoMaquinaria from "views/tipoDeMaquinas/AdministrarTipoMaquinaria";
import PagFormCrearLineaProduccion from "views/misLineasDeProduccion/PagFormCrearLineaProduccion";
import AdministrarLineasProduccion from "views/misLineasDeProduccion/AdministrarLineasProduccion";
import PagLogIn from "views/logIn/PagLogIn";
import PagFormNuevoActivo from "views/misActivos/PagFormNuevoActivo";
import AdministrarActivos from "views/misActivos/AdministrarActivos";
import PagFormEditarActivo from "views/misActivos/PagFormEditarActivo";
import PagFormEditarLineaProduccion from "views/misLineasDeProduccion/PagFormEditarLineaProduccion";
import PagFormEditarProveedor from "views/proveedores/PagFormEditarProveedor";
import PagFormEditarMarca from "views/marcas/PagFormEditarMarca";
import PagFormEditarTipoMaquinaria from "views/tipoDeMaquinas/PagFormEditarTipoMaquinaria";
import PagFromEditarUsuario from "views/usuarios/PagFromEditarUsuario";

var routes = [


  {
    path: "/activo/nuevo",
    component: PagFormNuevoActivo,
    layout: "/admin",
  },
  {
    path: "/activo/editar",
    component: PagFormEditarActivo,
    layout: "/admin",
  },
  {
    path: "/activo",
    name: "Activos",
    icon: "nc-icon nc-settings",
    component: AdministrarActivos,
    layout: "/admin",
  },
  {
    path: "/lineadeproduccion/nueva",
   
    component: PagFormCrearLineaProduccion,
    layout: "/admin",
  },
  {
    path: "/lineadeproduccion/editar",
    component: PagFormEditarLineaProduccion,
    layout: "/admin",
  },
  {
    path: "/lineadeproduccion",
    name: "Lineas de Producción",
    icon: "nc-icon nc-settings",
    component: AdministrarLineasProduccion,
    layout: "/admin",
  },
  {
    path: "/proveedor/nuevo",
    
    component: PagFormNuevoProveedor,
    layout: "/admin",
  },
  {
    path: "/proveedor/editar",

    component: PagFormEditarProveedor,
    layout: "/admin",
  },
  {
    path: "/proveedor",
    name: "Proveedores",
    icon: "nc-icon nc-delivery-fast",
    component: AdministrarProveedores,
    layout: "/admin",
  },
  {
    path: "/marca/nueva",
   
    component: PagFormNuevaMarca,
    layout: "/admin",
  },
  {
    path: "/marca/editar",
    
    component: PagFormEditarMarca,
    layout: "/admin",
  },
  {
    path: "/marca",
    name: " Marcas",
    icon: "nc-icon nc-tag-content",
    component: AministrarMarcas,
    layout: "/admin",
  },
  {
    path: "/tipodemaquina/tipodemaquinas/nuevo",
 
    component: PagFromNuevoTipoMaquina,
    layout: "/admin",
  },
  {
    path: "/tipodemaquina/tipodemaquinas/editar",

    component: PagFormEditarTipoMaquinaria,
    layout: "/admin",
  },
  {
    path: "/tipodemaquina/tipodemaquinas/",
    name: "Tipos de Máquina",
    icon: "nc-icon nc-settings-gear-65",
    component: AdministrarTipoMaquinaria,
    layout: "/admin",
  },
  {
    path: "/tipodemaquinas/nuevo",

    component: PagFormNuevoComponenteFisico,
    layout: "/admin",
  },
  {
    path: "/tipodemaquinas/editar",

    component: PagFormEditarTipoMaquinaria,
    layout: "/admin",
  },
  {
    path: "/tipodemaquinas",
    name: "Componentes Físicos",
    icon: "nc-icon nc-settings-gear-65",
    component: AdministrarComponentesFisicos,
    layout: "/admin",
  },
  {
    path: "/usuario/nuevo",
    component: PagFormNuevoUsuario,
    layout: "/admin",
  },
  {
    path: "/usuario/editar",
    component: PagFromEditarUsuario,
    layout: "/admin",
  },
  {
    path: "/usuario",
    name: "Administrar Usuarios",
    icon: "nc-icon nc-single-02",
    component: AministrarUsuario,
    layout: "/admin",
  },
  {
    path: "/logIn",
    name: "Inicio de sesión",
    icon: "nc-icon nc-single-02",
    component: PagLogIn,
    layout: "/admin",
  },

];
export default routes;
