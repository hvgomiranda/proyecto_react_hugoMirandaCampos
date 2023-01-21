import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <NavBar/>
        <ItemListContainer greetings="Hola" name="Mundo"/>
      </div>
    </div>
  );
}

export default App;
