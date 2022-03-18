import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import logo from "../img1/img/LOGO.png";



const Header = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" width={"350px"} id="logogab" class="img-fluid" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/destinos">Destinos</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/promocao">Promoções</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/contato">Fale conosco</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>

  );
}

export default Header;