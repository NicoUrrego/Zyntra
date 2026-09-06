import "./Colores.css";

function Colores() {
  const colores = [
    {
      nombre: "Turquesa",
      hex: "#119DA4",
      rgb: "17 / 157 / 164",
      descripcion:
        "Representa dinamismo, innovación y conexión. Es uno de los colores principales de la identidad visual.",
    },
    {
      nombre: "Azul Profundo",
      hex: "#19647E",
      rgb: "25 / 100 / 126",
      descripcion:
        "Comunica confianza, estabilidad y profundidad. Funciona como color secundario dentro del sistema visual.",
    },
    {
      nombre: "Negro",
      hex: "#030301",
      rgb: "3 / 3 / 1",
      descripcion:
        "Representa fuerza, contraste y sofisticación. Es utilizado como base para generar composiciones de alto contraste.",
    },
    {
      nombre: "Verde Neon",
      hex: "#0FFF95",
      rgb: "15 / 255 / 149",
      descripcion:
        "Expresa energía, creatividad y una personalidad contemporánea. Se utiliza como color de acento.",
    },
    {
      nombre: "Gris claro",
      hex: "#F2F2F2",
      rgb: "242 / 242 / 242",
      descripcion:
        "Aporta equilibrio, claridad y espacio visual. Permite generar contraste con los colores más intensos.",
    },
  ];

  return (
    <section id="colores" className="colores">

      {/* =========================
          HEADER
      ========================= */}

      <header className="colores-header">

        <div className="colores-index">
          <span>05</span>
          <span>BRAND BOOK</span>
        </div>

        <div className="colores-title">
          <p>IDENTIDAD VISUAL</p>
          <h1>Colores</h1>
        </div>

        <div className="colores-intro">
          <p>
            Una paleta construida para representar la energía,
            personalidad y esencia de la marca.
          </p>
        </div>

      </header>


      {/* =========================
          PALETA
      ========================= */}

      <section className="paleta">

        <div className="paleta-label">
          <span>COLOR SYSTEM</span>
          <span>HOVER TO EXPLORE</span>
        </div>


        <div className="colores-barras">

          {colores.map((color, index) => (

            <article
              className="color-barra"
              key={color.hex}
              style={{ "--color": color.hex }}
            >

              {/* Número */}

              <div className="barra-number">
                0{index + 1}
              </div>


              {/* Información inicial */}

              <div className="barra-base">

                <span className="barra-nombre">
                  {color.nombre}
                </span>

                <span className="barra-hex">
                  {color.hex}
                </span>

              </div>


              {/* Información hover */}

              <div className="barra-info">

                <div className="barra-info-top">

                  <span>
                    0{index + 1} / COLOR
                  </span>

                  <span>
                    RGB
                  </span>

                </div>

                <div className="barra-info-content">

                  <h2>
                    {color.nombre}
                  </h2>

                  <strong>
                    {color.hex}
                  </strong>

                  <span>
                    RGB {color.rgb}
                  </span>

                  <p>
                    {color.descripcion}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          INFORMACIÓN INFERIOR
      ========================= */}

      <section className="colores-bottom">

        <div className="bottom-number">
          05
        </div>

        <div className="bottom-content">

          <span>COLOR PHILOSOPHY</span>

          <h2>
            Contraste.
            <br />
            <strong>Identidad.</strong>
            <br />
            Energía.
          </h2>

        </div>

        <div className="bottom-description">

          <p>
            La combinación de tonos profundos con acentos
            vibrantes permite construir una identidad reconocible,
            flexible y contemporánea.
          </p>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="colores-footer">

        <div></div>

        <section>

          <span>05 / 06</span>

          <p>
            PALETA CROMÁTICA
          </p>

          <span>
            BRAND IDENTITY
          </span>

        </section>

      </footer>

    </section>
  );
}

export default Colores;