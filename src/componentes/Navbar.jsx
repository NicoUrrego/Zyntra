import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">

        <img src="../imagenes/zyntra-logo.png" alt="Logo de Zyntra"/>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                ¿Quienes somos?
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Personalidad">
                Personalidad
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Logotipo">
                Logotipo
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#usos-header">
                Usos incorrectos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#colores">
                Colores
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#tipografia">
                Tipografía
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#fotografia">
                Fotografía
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;