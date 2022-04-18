import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Admin";
import AdministrarProveedores from "./views/proveedores/AdministrarProveedores";
import AministrarMarcas from "./views/marcas/AministrarMarcas";
import AdministrarActivos from "./views/misActivos/AdministrarActivos";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="/views/proveedores/AdministrarProveedores" element={<AdministrarProveedores />} />
          <Route path="/views/marcas/AministrarMarcas" element={<AministrarMarcas />} />
          <Route path="/views/misActivos/AdministrarActivos" element={<AdministrarActivos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));