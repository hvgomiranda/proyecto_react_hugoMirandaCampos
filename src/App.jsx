import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar className="Header"/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route path="/details"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
