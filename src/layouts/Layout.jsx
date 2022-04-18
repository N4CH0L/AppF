import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/views/proveedores/AdministrarProveedores">AdministrarProveedores</Link>
          </li>
          <li>
            <Link to="/views/marcas/AministrarMarcas">AministrarMarcas</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;