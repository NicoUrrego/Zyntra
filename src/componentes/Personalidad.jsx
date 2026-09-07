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
                Zyntra es una empresa de tecnología enfocada en el entretenimiento y la cultura pop. Creamos experiencias y soluciones de software que conectan la tecnología con el arte, los videojuegos, el entretenimiento y la cultura geek.
              <br/><br/>
              En esencia: somos tecnología con personalidad, creada para personas apasionadas por el entretenimiento, el arte y la cultura geek.
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
                El arquetipo que mejor representa a Zyntra es El Creador, porque la marca busca transformar ideas en experiencias mediante la combinación de tecnología, creatividad y entretenimiento.
              <br/><br/>
              "¿Qué podemos crear ahora?"
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
                Zyntra representa la cretividad apasionada por la tecnologia y genera cercania con sus colaboradores y entuciastas.
              <br/><br/>
              "Convertimos ideas, tecnología y cultura pop en experiencias que dan ganas de explorar."
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
                <p>INNOVADORA</p>
              </div>

              <div className="atributo">
                <span>02</span>
                <p>CREATIVA</p>
              </div>

              <div className="atributo">
                <span>03</span>
                <p>APASIONADA</p>
              </div>

              <div className="atributo">
                <span>04</span>
                <p>CERCANA</p>
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
                Escuchamos, conversamos y construimos junto a nuestra comunidad.

No vemos a las personas únicamente como usuarios, sino como parte del universo de la marca. Valoramos sus opiniones, intereses, ideas y críticas.
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
              <li>Fria</li>
              <li>Corporativa Al Extremo</li>
              <li>Pretenciosa</li>
              <li>Genérica</li>
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