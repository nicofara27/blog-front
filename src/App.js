import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/common/Menu";
import PagPrincipal from "./components/views/PagPrincipal";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<PagPrincipal></PagPrincipal>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
