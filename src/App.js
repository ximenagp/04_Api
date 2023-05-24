//import { Suspense } from "react"; //componente que permite tener varios hijos dentro de él
import Personajes from "./assets/img/Personajes.jpg";
import The_Simpsons from "./assets/img/The_Simpsons.png";
import Busqueda from "./components/MiApi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container" id="contenedor">
        <div className="row">
          <div className="col-md-6" id="contenedor1">
            <img src={The_Simpsons} alt="simpson" id="img1" />
            <p>
              Los Simpson (en inglés: The Simpsons) es una serie estadounidense
              de comedia, en formato de animación, creada por Matt Groening para
              Fox Broadcasting Company y emitida en varios países del mundo. La
              serie es una sátira de la sociedad estadounidense que narra la
              vida y el día a día de una familia de clase media de ese país
              —cuyos miembros son Homer, Marge, Bart, Lisa y Maggie Simpson— que
              vive en un pueblo ficticio llamado Springfield.
            </p>
            <div>
              <img src={Personajes} alt="simpson" id="img2" />
            </div>
          </div>
          <div className="col-md-6" id="contenedor2">
            <h3>Busca tu Personaje</h3>
            <Busqueda />
        
          
      
          </div>
        </div>
        <footer>Desafío Final React I</footer>
      </div>
    </div>
  );
}

export default App;
