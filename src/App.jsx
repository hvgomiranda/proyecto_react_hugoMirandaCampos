import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar className="Header"/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route path="/details/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="*" element={ <Navigate to="/"/> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
