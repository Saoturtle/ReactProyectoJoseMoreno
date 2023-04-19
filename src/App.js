import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer Saludos={"Bienvenidos a nuestra tienda de videojuegos online, donde podrás encontrar un amplio catalogo de títulos para todas las plataformas, desde consolas de última generación hasta PC y móviles. Nos apasiona el mundo de los videojuegos y queremos compartir nuestra pasión contigo, ofreciéndote los mejores juegos del mercado a precios competitivos y con la comodidad de poder adquirirlos desde la comodidad de tu hogar."}/>
    </div>
  );
}

export default App;
