import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/common/Menu";
import PagPrincipal from "./components/views/PagPrincipal";
import PagArticulo from "./components/views/PagArticulo";
import PagIngreso from "./components/views/PagIngreso";
import PagRegistro from "./components/views/PagRegistro";
import PagAgregarArt from "./components/views/PagAgregarArt";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<PagPrincipal/>}></Route>
        <Route exact path="/ingreso" element={<PagIngreso/>}></Route>
        <Route exact path="/registro" element={<PagRegistro/>}></Route>
        <Route exact path="/subir" element={<PagAgregarArt/>}></Route>
        <Route exact path="/editar/:id" element={<PagAgregarArt/>}></Route>
        <Route exact path="/articulo/:id" element={<PagArticulo/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
