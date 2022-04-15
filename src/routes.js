
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
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
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },

  {
    path: "/activo/nuevo",
    name: "Crear Activo",
    icon: "nc-icon nc-settings",
    component: PagFormNuevoActivo,
    layout: "/admin",
  },
  {
    path: "/activo/editar",
    name: "Editar Activo",
    icon: "nc-icon nc-settings",
    component: PagFormEditarActivo,
    layout: "/admin",
  },
  {
    path: "/activo",
    name: "Administrar Activos",
    icon: "nc-icon nc-settings",
    component: AdministrarActivos,
    layout: "/admin",
  },
  {
    path: "/lineadeproduccion/nueva",
    name: "Crear Linea de Producción",
    icon: "nc-icon nc-settings",
    component: PagFormCrearLineaProduccion,
    layout: "/admin",
  },
  {
    path: "/lineadeproduccion/editar",
    name: "Editar Lineas de Producciónn",
    icon: "nc-icon nc-settings",
    component: PagFormEditarLineaProduccion,
    layout: "/admin",
  },
  {
    path: "/lineadeproduccion",
    name: "Administracion de Lineas de Producción",
    icon: "nc-icon nc-settings",
    component: AdministrarLineasProduccion,
    layout: "/admin",
  },
  {
    path: "/proveedor/nuevo",
    name: "Nuevo Proveedor",
    icon: "nc-icon nc-delivery-fast",
    component: PagFormNuevoProveedor,
    layout: "/admin",
  },
  {
    path: "/proveedor/editar",
    name: "Editar Proveedor",
    icon: "nc-icon nc-delivery-fast",
    component: PagFormEditarProveedor,
    layout: "/admin",
  },
  {
    path: "/proveedor",
    name: "Administrar Proveedores",
    icon: "nc-icon nc-delivery-fast",
    component: AdministrarProveedores,
    layout: "/admin",
  },
  {
    path: "/marca/nueva",
    name: "Nueva Marca",
    icon: "nc-icon nc-tag-content",
    component: PagFormNuevaMarca,
    layout: "/admin",
  },
  {
    path: "/marca/editar",
    name: "Editar Marca",
    icon: "nc-icon nc-tag-content",
    component: PagFormEditarMarca,
    layout: "/admin",
  },
  {
    path: "/marca",
    name: "Administrar Marcas",
    icon: "nc-icon nc-tag-content",
    component: AministrarMarcas,
    layout: "/admin",
  },
  {
    path: "/tipodemaquina/tipodemaquinas/nuevo",
    name: "Nuevo Tipo de Máquina",
    icon: "nc-icon nc-settings-gear-65",
    component: PagFromNuevoTipoMaquina,
    layout: "/admin",
  },
  {
    path: "/tipodemaquina/tipodemaquinas/editar",
    name: "Editar Tipo de Máquina",
    icon: "nc-icon nc-settings-gear-65",
    component: PagFormEditarTipoMaquinaria,
    layout: "/admin",
  },
  {
    path: "/tipodemaquina/tipodemaquinas/",
    name: "Administrar Tipos de Máquina",
    icon: "nc-icon nc-settings-gear-65",
    component: AdministrarTipoMaquinaria,
    layout: "/admin",
  },
  {
    path: "/tipodemaquinas/nuevo",
    name: "Nuevo Componente Físico",
    icon: "nc-icon nc-settings-gear-65",
    component: PagFormNuevoComponenteFisico,
    layout: "/admin",
  },
  {
    path: "/tipodemaquinas/editar",
    name: "Editar Componente Físico",
    icon: "nc-icon nc-settings-gear-65",
    component: PagFormEditarTipoMaquinaria,
    layout: "/admin",
  },
  {
    path: "/tipodemaquinas",
    name: "Administrar Componentes Físicos",
    icon: "nc-icon nc-settings-gear-65",
    component: AdministrarComponentesFisicos,
    layout: "/admin",
  },
  {
    path: "/usuario/nuevo",
    name: "Nuevo Usuario",
    icon: "nc-icon nc-single-02",
    component: PagFormNuevoUsuario,
    layout: "/admin",
  },
  {
    path: "/usuario/editar",
    name: "Editar Usuario",
    icon: "nc-icon nc-single-02",
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
