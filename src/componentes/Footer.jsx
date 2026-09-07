
import "./Footer.css";

function Footer() {
  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* =========================
          CONTENIDO PRINCIPAL
      ========================= */}

      <div className="footer-contenido">

        {/* MARCA */}

        <div className="footer-marca">

          <span className="footer-numero">
            07
          </span>

          <div>

            <img
              src="src/imagenes/zyntra-logo.png"
              alt="Zyntra"
              className="footer-logo"
            />

            <p>
              Tecnología, entretenimiento
              <br />
              y cultura geek.
            </p>

          </div>

        </div>


        {/* NAVEGACIÓN */}

        <div className="footer-columna">

          <span className="footer-titulo">
            NAVEGACIÓN
          </span>

          <a href="#inicio">
            Inicio
          </a>

          <a href="#personalidad">
            Personalidad
          </a>

          <a href="#logotipo">
            Logotipo
          </a>

          <a href="#colores">
            Colores
          </a>

          <a href="#tipografia">
            Tipografía
          </a>

          <a href="#fotografia">
            Fotografía
          </a>

        </div>


        {/* REDES */}

        <div className="footer-columna">

          <span className="footer-titulo">
            CONECTA
          </span>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            Behance
          </a>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            X / Twitter
          </a>

        </div>


        {/* CONTACTO */}

        <div className="footer-columna footer-contacto">

          <span className="footer-titulo">
            CONTACTO
          </span>

          <p>
            ¿Tienes un proyecto
            <br />
            en mente?
          </p>

          <a
            href="mailto:hola@zyntra.com"
            className="footer-email"
          >
            hola@zyntra.com
          </a>

        </div>

      </div>


      {/* =========================
          FRASE / CTA
      ========================= */}

      <div className="footer-cta">

        <h2>
          CREEMOS
          <br />
          <span>LO IMPOSIBLE.</span>
        </h2>

        <div className="footer-cta-symbol">
          ↗
        </div>

      </div>


      {/* =========================
          BARRA INFERIOR
      ========================= */}

      <div className="footer-bottom">

        <span>
          © 2026 ZYNTRA
        </span>

        <span>
          BRAND IDENTITY
        </span>

        <span>
          COLOMBIA
        </span>

        <a href="#inicio" onClick={handleBackToTop}>
          VOLVER ARRIBA ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;

