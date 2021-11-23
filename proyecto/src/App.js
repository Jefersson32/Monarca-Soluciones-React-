import logo from './logo.svg';
import logoMonarca from './assets/img/logoMonarca.png';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <ul class="site-nav">
                <a href="#" class="nav-item-link">Inicio</a>
                <a href="#services">Categorias Beneficios</a>
                <a href="#Beneficios">Beneficios</a>
                <a href="#team">Nuestro equipo</a>
                <a href="#modalLogin" data-bs-toggle="modal">Login</a>
                <a href="#modalRegistro" data-bs-toggle="modal">Registrarme</a>
        </ul>

       
    
        <div>
                <img src={logoMonarca}/>
        </div>

    </div>
  );
}

export default App;
