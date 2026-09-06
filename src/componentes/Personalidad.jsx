import "./Personalidad.css";

function Personalidad() {
  return (
    <section id="Personalidad" className="personalidad">

      {/* ENCABEZADO */}
      <div className="personalidad-header">
        <span className="seccion-numero">02</span>

        <div className="personalidad-titulo">
          <p className="eyebrow">BRAND BOOK</p>
          <h1>Personalidad</h1>
        </div>

        
      </div>


      {/* TARJETAS PRINCIPALES */}
      <div className="personalidad-grid">

        {/* TARJETA 1 */}
        <article className="personalidad-card card-grande">
          <div className="card-numero">01</div>

          <div className="card-contenido">
            <span className="card-label">PERSONALIDAD</span>
            <h2>¿Quiénes somos?</h2>

            <div className="contenido-vacio">
              <p>
                Escribe aquí una descripción general de la personalidad
                de la marca...
              </p>
            </div>
          </div>
        </article>


        {/* TARJETA 2 */}
        <article className="personalidad-card card-turquesa">
          <div className="card-numero">02</div>

          <div className="card-contenido">
            <span className="card-label">ARQUETIPO</span>
            <h2>Arquetipo de marca</h2>

            <div className="contenido-vacio">
              <p>
                Describe aquí el arquetipo que representa a la marca...
              </p>
            </div>
          </div>
        </article>


        {/* TARJETA 3 */}
        <article className="personalidad-card card-neon">
          <div className="card-numero">03</div>

          <div className="card-contenido">
            <span className="card-label">TONO</span>
            <h2>Voz y tono</h2>

            <div className="contenido-vacio">
              <p>
                Define aquí cómo habla la marca y qué tono utiliza
                para comunicarse...
              </p>
            </div>
          </div>
        </article>


        {/* TARJETA 4 */}
        <article className="personalidad-card card-oscura">
          <div className="card-numero">04</div>

          <div className="card-contenido">
            <span className="card-label">ATRIBUTOS</span>
            <h2>Rasgos</h2>

            <div className="atributos">

              <div className="atributo">
                <span>01</span>
                <p>________________</p>
              </div>

              <div className="atributo">
                <span>02</span>
                <p>________________</p>
              </div>

              <div className="atributo">
                <span>03</span>
                <p>________________</p>
              </div>

              <div className="atributo">
                <span>04</span>
                <p>________________</p>
              </div>

            </div>
          </div>
        </article>


        {/* TARJETA 5 */}
        <article className="personalidad-card card-comportamiento">
          <div className="card-numero">05</div>

          <div className="card-contenido">
            <span className="card-label">COMPORTAMIENTO</span>
            <h2>Cómo actuamos</h2>

            <div className="contenido-vacio">
              <p>
                Describe aquí cómo debe comportarse la marca frente
                a su comunidad, clientes y colaboradores...
              </p>
            </div>
          </div>
        </article>


        {/* TARJETA 6 */}
        <article className="personalidad-card card-no-somos">
          <div className="card-numero">06</div>

          <div className="card-contenido">
            <span className="card-label">LÍMITES</span>
            <h2>No somos...</h2>

            <ul className="lista-vacia">
              <li>________________________</li>
              <li>________________________</li>
              <li>________________________</li>
              <li>________________________</li>
            </ul>
          </div>
        </article>

      </div>


      {/* CIERRE DE SECCIÓN */}
      <div className="personalidad-footer">

        <div className="footer-linea"></div>

        <div className="footer-contenido">
          <span>01 / 06</span>

          <p>
            PERSONALIDAD DE MARCA
          </p>

          <span>BRAND BOOK</span>
        </div>

      </div>

    </section>
  );
}

export default Personalidad;