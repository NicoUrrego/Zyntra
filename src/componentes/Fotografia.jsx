import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Fotografia.css";
import imagen01 from "../imagenes/Zyntra-pin.png";
import imagen02 from "../imagenes/Zyntra-cartel.png";
import imagen03 from "../imagenes/Zyntra-app.png";
import imagen04 from "../imagenes/Zyntra-termo.png";
import imagen05 from "../imagenes/Zyntra-mochila.png";
import imagen06 from "../imagenes/Zyntra-reloj.png";
import imagen07 from "../imagenes/Zyntra-modelo1.png";
import imagen08 from "../imagenes/Zyntra-medalla.jpg";
import imagen09 from "../imagenes/Zyntra-cristal.jpg";
import imagen10 from "../imagenes/Zyntra-fondo.png";
import imagen11 from "../imagenes/Zyntra-buzo.jpg";
function Fotografia() {
  const [imagenActiva, setImagenActiva] = useState(null);

  const abrirImagen = (src, numero, tipo) => {
    setImagenActiva({ src, numero, tipo });
  };

  const activarConTeclado = (e, src, numero, tipo) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrirImagen(src, numero, tipo);
    }
  };

  // Cerrar el visor presionando ESC
  useEffect(() => {
    const cerrarConEscape = (e) => {
      if (e.key === "Escape") {
        setImagenActiva(null);
      }
    };

    document.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
    };
  }, []);

  // Evitar que la página se desplace mientras el visor está abierto
  useEffect(() => {
    if (imagenActiva) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [imagenActiva]);

  return (
    <section id="fotografia" className="fotografia">

      {/* =========================
          ENCABEZADO
      ========================= */}

      <header className="fotografia-header">

        <span className="fotografia-numero">
          06
        </span>

        <div>
          <p className="fotografia-label">
            IDENTIDAD VISUAL
          </p>

          <h1>
            Fotografía
          </h1>
        </div>

      </header>


      {/* =========================
          INTRODUCCIÓN
      ========================= */}

      <div className="fotografia-intro">

        <span className="fotografia-intro-numero">
          01
        </span>

        <div>

          <h2>
            Una mirada
            <br />
            sobre la marca.
          </h2>

          <p>
            La fotografía representa la personalidad de la marca a través
            de imágenes dinámicas, auténticas y contemporáneas. Las
            composiciones deben transmitir creatividad, tecnología,
            entretenimiento y conexión con la cultura.
          </p>

        </div>

      </div>


      {/* =========================
          GALERÍA
      ========================= */}

      <div className="fotografia-galeria">


        {/* ==========================================
            IMAGEN GRANDE
            FORMATO: 2 COLUMNAS × 2 FILAS
        ========================================== */}

        <figure
          className="foto foto-grande"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen01, "01", "HERO IMAGE")}
          onKeyDown={(e) => activarConTeclado(e, imagen01, "01", "HERO IMAGE")}
        >

          <img
            src={imagen01}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>01</span>
            <span>HERO IMAGE</span>
          </figcaption>

        </figure>


        {/* ==========================================
            IMAGEN VERTICAL
            FORMATO: 1 COLUMNA × 2 FILAS
        ========================================== */}

        <figure
          className="foto foto-vertical"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen02, "02", "VERTICAL")}
          onKeyDown={(e) => activarConTeclado(e, imagen02, "02", "VERTICAL")}
        >

          <img
            src={imagen02}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>02</span>
            <span>VERTICAL</span>
          </figcaption>

        </figure>


        {/* ==========================================
            IMAGEN PEQUEÑA
            FORMATO: 1 COLUMNA × 1 FILA
        ========================================== */}

        <figure
          className="foto foto-pequena"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen03, "03", "DETAIL")}
          onKeyDown={(e) => activarConTeclado(e, imagen03, "03", "DETAIL")}
        >

          <img
            src={imagen03}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>03</span>
            <span>DETAIL</span>
          </figcaption>

        </figure>


        {/* ==========================================
            IMAGEN HORIZONTAL
            FORMATO: 2 COLUMNAS × 1 FILA
        ========================================== */}

        <figure
          className="foto foto-horizontal"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen04, "04", "LANDSCAPE")}
          onKeyDown={(e) => activarConTeclado(e, imagen04, "04", "LANDSCAPE")}
        >

          <img
            src={imagen04}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>04</span>
            <span>LANDSCAPE</span>
          </figcaption>

        </figure>
        
        <figure
          className="foto foto-horizontal"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen10, "05", "LANDSCAPE")}
          onKeyDown={(e) => activarConTeclado(e, imagen10, "05", "LANDSCAPE")}
        >

          <img
            src={imagen10}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>05</span>
            <span>LANDSCAPE</span>
          </figcaption>

        </figure>

        {/* ==========================================
            IMAGEN PEQUEÑA
            FORMATO: 1 COLUMNA × 1 FILA
        ========================================== */}

        <figure
          className="foto foto-pequena"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen05, "06", "DETAIL")}
          onKeyDown={(e) => activarConTeclado(e, imagen05, "06", "DETAIL")}
        >

          <img
            src={imagen05}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>06</span>
            <span>DETAIL</span>
          </figcaption>

        </figure>


        {/* ==========================================
            IMAGEN PANORÁMICA
            FORMATO: 3 COLUMNAS × 1 FILA
        ========================================== */}

        <figure
          className="foto foto-panoramica"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen06, "07", "PANORAMIC")}
          onKeyDown={(e) => activarConTeclado(e, imagen06, "07", "PANORAMIC")}
        >

          <img
            src={imagen06}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>07</span>
            <span>PANORAMIC</span>
          </figcaption>

        </figure>

        <figure
          className="foto foto-vertical"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen07, "08", "VERTICAL")}
          onKeyDown={(e) => activarConTeclado(e, imagen07, "08", "VERTICAL")}
        >

          <img
            src={imagen07}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>08</span>
            <span>VERTICAL</span>
          </figcaption>

        </figure>

        <figure
          className="foto foto-grande"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen08, "09", "HERO IMAGE")}
          onKeyDown={(e) => activarConTeclado(e, imagen08, "09", "HERO IMAGE")}
        >

          <img
            src={imagen08}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>09</span>
            <span>HERO IMAGE</span>
          </figcaption>

        </figure>

        <figure
          className="foto foto-grande"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen09, "10", "HERO IMAGE")}
          onKeyDown={(e) => activarConTeclado(e, imagen09, "10", "HERO IMAGE")}
        >

          <img
            src={imagen09}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>10</span>
            <span>HERO IMAGE</span>
          </figcaption>

        </figure>

        <figure
          className="foto foto-vertical"
          tabIndex="0"
          role="button"
          onClick={() => abrirImagen(imagen11, "11", "VERTICAL")}
          onKeyDown={(e) => activarConTeclado(e, imagen11, "11", "VERTICAL")}
        >

          <img
            src={imagen11}
            alt="Representación visual de la marca"
          />

          <figcaption>
            <span>11</span>
            <span>VERTICAL</span>
          </figcaption>

        </figure>
      </div>


      {/* =========================
          CRITERIOS FOTOGRÁFICOS
      ========================= */}

      <section className="fotografia-criterios">

        <div className="criterios-header">

          <span>
            02
          </span>

          <h2>
            Dirección visual
          </h2>

        </div>


        <div className="criterios-grid">

          <div className="criterio">
            <span>01</span>

            <h3>
              Autenticidad
            </h3>

            <p>
              Imágenes naturales y espontáneas que permitan
              mostrar una conexión real con las personas.
            </p>
          </div>


          <div className="criterio">
            <span>02</span>

            <h3>
              Dinamismo
            </h3>

            <p>
              Composiciones con movimiento, perspectivas
              interesantes y encuadres poco convencionales.
            </p>
          </div>


          <div className="criterio">
            <span>03</span>

            <h3>
              Cultura
            </h3>

            <p>
              La fotografía debe conectar con entretenimiento,
              tecnología, arte y cultura geek.
            </p>
          </div>


          <div className="criterio">
            <span>04</span>

            <h3>
              Contraste
            </h3>

            <p>
              Uso de luces, sombras y colores intensos para
              generar imágenes visualmente reconocibles.
            </p>
          </div>

        </div>

      </section>


      {/* =================================================
          VISOR / LIGHTBOX
      ================================================= */}

      {imagenActiva && createPortal(
        (

        <div
          className="visor-imagen"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la fotografía"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setImagenActiva(null);
            }
          }}
        >

          <button
            type="button"
            className="visor-cerrar"
            onClick={() => setImagenActiva(null)}
            aria-label="Cerrar imagen"
          >
            ×
          </button>


          <div
            className="visor-contenido"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={imagenActiva.src}
              alt="Vista ampliada de la fotografía"
            />


            <div className="visor-info">

              <span>
                {imagenActiva.numero}
              </span>

              <span>
                {imagenActiva.tipo}
              </span>

            </div>

          </div>

        </div>

        ),
        document.body
      )}

    </section>
  );
}

export default Fotografia;