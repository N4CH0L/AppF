import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Admin";
import AdministrarProveedores from "./views/proveedores/AdministrarProveedores";
import AministrarMarcas from "./views/marcas/AministrarMarcas";
import AdministrarActivos from "./views/misActivos/AdministrarActivos";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import PagLogIn from "views/logIn/PagLogIn";


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes>
          <Route export path="/" component={PagLogIn}>
          </Route>
        </Routes>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));