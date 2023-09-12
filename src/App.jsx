import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a la mejor tienda de Arte"} />
      <p>tambien queria poner una imagen card de la misma forma del greeting <br></br> pero no me salio ninguna prueba</p>
    </div>
  );
}

export default App;
