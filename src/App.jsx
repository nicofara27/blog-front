import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/common/Menu";
import RutaProtegida from "./routes/RutaProtegida";
import PagPrincipal from "./pages/pagPrincipal/PagPrincipal";
import PagArticulo from "./pages/pagArticulo/PagArticulo";
import PagIngreso from "./pages/pagIngreso/PagIngreso";
import PagRegistro from "./pages/pagRegistro/PagRegistro";
import PagAgregarArt from "./pages/pagAgregarArt/PagAgregarArt";
import Footer from "./components/common/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<PagPrincipal />}></Route>
        <Route exact path="/ingreso" element={<PagIngreso />}></Route>
        <Route exact path="/registro" element={<PagRegistro />}></Route>
        <Route
          exact
          path="/subir"
          element={
            <RutaProtegida>
              <PagAgregarArt />
            </RutaProtegida>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <RutaProtegida>
              <PagAgregarArt />
            </RutaProtegida>
          }
        ></Route>
        <Route exact path="/articulo/:id" element={<PagArticulo />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
