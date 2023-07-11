import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/common/Menu";
import PagPrincipal from "./components/views/PagPrincipal";
import PagArticulo from "./components/views/PagArticulo";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<PagPrincipal/>}></Route>
        <Route exact path="/articulo/:id" element={<PagArticulo/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
