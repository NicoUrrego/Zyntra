import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">

        <a className="navbar-brand" href="#inicio">
          Mi Página
        </a>

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
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#productos">
                Productos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                Nosotros
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;