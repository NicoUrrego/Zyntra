import "./Usos.css";

function Usos() {
  return (
    <section className="usos">

      {/* =========================
          HEADER
      ========================= */}

      <header id="usos-header" className="usos-header">

        <div className="usos-index">
          <span>04</span>
          <span>BRAND BOOK</span>
        </div>

        <div className="usos-title">
          <p>IDENTIDAD VISUAL</p>
          <h1>Usos<br />incorrectos</h1>
        </div>

        <div className="usos-intro">
          <p>
            El logotipo debe conservar siempre su estructura,
            proporción y características visuales originales.
          </p>
        </div>

      </header>


      {/* =========================
          INTRODUCCIÓN
      ========================= */}

      <div className="usos-warning">

        <div className="warning-symbol">
          !
        </div>

        <div className="warning-text">
          <span>IMPORTANT / 001</span>

          <p>
            No alterar, deformar, modificar o intervenir el
            logotipo de ninguna manera que afecte su identidad.
          </p>
        </div>

      </div>


      {/* =========================
          GRID DE USOS INCORRECTOS
      ========================= */}

      <section className="usos-grid">


        {/* 01 */}

        <article className="uso-card">

          <div className="uso-number">
            01
          </div>

          <div className="uso-image">

            <div className="image-placeholder">

              <span>01</span>

              <div className="placeholder-icon">
                +
              </div>

              <p>
                AGREGAR IMAGEN
              </p>

            </div>

            <div className="error-mark">
              ×
            </div>

          </div>

          <div className="uso-info">

            <span>NO DEFORMAR</span>

            <h2>
              Alterar
              <br />
              proporciones
            </h2>

            <p>
              No modificar las proporciones originales
              del logotipo de forma horizontal o vertical.
            </p>

          </div>

        </article>


        {/* 02 */}

        <article className="uso-card">

          <div className="uso-number">
            02
          </div>

          <div className="uso-image">

            <div className="image-placeholder">

              <span>02</span>

              <div className="placeholder-icon">
                +
              </div>

              <p>
                AGREGAR IMAGEN
              </p>

            </div>

            <div className="error-mark">
              ×
            </div>

          </div>

          <div className="uso-info">

            <span>NO ROTAR</span>

            <h2>
              Girar
              <br />
              el logotipo
            </h2>

            <p>
              El logotipo debe mantenerse siempre
              en su orientación original.
            </p>

          </div>

        </article>


        {/* 03 */}

        <article className="uso-card">

          <div className="uso-number">
            03
          </div>

          <div className="uso-image">

            <div className="image-placeholder">

              <span>03</span>

              <div className="placeholder-icon">
                +
              </div>

              <p>
                AGREGAR IMAGEN
              </p>

            </div>

            <div className="error-mark">
              ×
            </div>

          </div>

          <div className="uso-info">

            <span>NO CAMBIAR COLOR</span>

            <h2>
              Modificar
              <br />
              colores
            </h2>

            <p>
              No utilizar colores diferentes a los
              establecidos dentro de la identidad visual.
            </p>

          </div>

        </article>


        {/* 04 */}

        <article className="uso-card">

          <div className="uso-number">
            04
          </div>

          <div className="uso-image">

            <div className="image-placeholder">

              <span>04</span>

              <div className="placeholder-icon">
                +
              </div>

              <p>
                AGREGAR IMAGEN
              </p>

            </div>

            <div className="error-mark">
              ×
            </div>

          </div>

          <div className="uso-info">

            <span>NO AÑADIR ELEMENTOS</span>

            <h2>
              Agregar
              <br />
              efectos
            </h2>

            <p>
              No añadir sombras, brillos, degradados,
              contornos u otros efectos al logotipo.
            </p>

          </div>

        </article>


        {/* 05 */}

        <article className="uso-card">

          <div className="uso-number">
            05
          </div>

          <div className="uso-image">

            <div className="image-placeholder">

              <span>05</span>

              <div className="placeholder-icon">
                +
              </div>

              <p>
                AGREGAR IMAGEN
              </p>

            </div>

            <div className="error-mark">
              ×
            </div>

          </div>

          <div className="uso-info">

            <span>NO CAMBIAR TIPOGRAFÍA</span>

            <h2>
              Modificar
              <br />
              elementos
            </h2>

            <p>
              No alterar la composición, tipografía o
              elementos que forman parte del logotipo.
            </p>

          </div>

        </article>


        {/* 06 */}

        <article className="uso-card">

          <div className="uso-number">
            06
          </div>

          <div className="uso-image">

            <div className="image-placeholder">

              <span>06</span>

              <div className="placeholder-icon">
                +
              </div>

              <p>
                AGREGAR IMAGEN
              </p>

            </div>

            <div className="error-mark">
              ×
            </div>

          </div>

          <div className="uso-info">

            <span>NO INVADIR</span>

            <h2>
              Ignorar el
              <br />
              área segura
            </h2>

            <p>
              Mantener siempre el espacio de seguridad
              definido alrededor del logotipo.
            </p>

          </div>

        </article>


      </section>


      {/* =========================
          FRASE FINAL
      ========================= */}

      <section className="usos-final">

        <div className="final-number">
          04
        </div>

        <div className="final-content">

          <span>CONSISTENCY IS KEY</span>

          <h2>
            La identidad
            <br />
            debe permanecer
            <strong> consistente.</strong>
          </h2>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="usos-footer">

        <div></div>

        <section>
          <span>04 / 06</span>

          <p>
            USOS INCORRECTOS
          </p>

          <span>
            BRAND IDENTITY
          </span>
        </section>

      </footer>

    </section>
  );
}

export default Usos;