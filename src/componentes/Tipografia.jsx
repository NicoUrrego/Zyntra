import "./Tipografia.css";

function Tipografia() {
  return (
    <section id="tipografia" className="tipografia">

      {/* HEADER */}
      <header className="tipografia-header">
        <span className="tipografia-numero">05</span>

        <div>
          <p className="tipografia-label">IDENTIDAD VISUAL</p>
          <h1>Tipografía</h1>
        </div>
      </header>


      {/* INTRODUCCIÓN */}
      <div className="tipografia-intro">
        <p className="tipografia-intro-numero">01</p>

        <div>
          <h2>
            Dos voces.
            <br />
            Una identidad.
          </h2>

          <p>
            La identidad tipográfica de la marca combina la personalidad
            geométrica y contemporánea de Outfit con la versatilidad y
            carácter editorial de Space Grotesk. Juntas construyen un
            lenguaje visual moderno, tecnológico y cercano.
          </p>
        </div>
      </div>


      {/* TIPOGRAFÍAS */}
      <div className="tipografia-muestras">

        {/* OUTFIT */}
        <article className="tipo-principal">

          <div className="tipo-meta">
            <span>TIPOGRAFÍA PRINCIPAL</span>
            <span>01</span>
          </div>

          <div className="tipo-display">
            <span className="tipo-nombre">
              Outfit
            </span>

            <span className="tipo-letras">
              Aa
            </span>

            <h3>
              Diseña el futuro.
            </h3>
          </div>

          <div className="tipo-info">

            <div>
              <span>USO</span>
              <p>
                Títulos, encabezados, llamados a la acción,
                números destacados y elementos principales.
              </p>
            </div>

            <div>
              <span>PESOS</span>
              <p>
                400 / 500 / 600 / 700
              </p>
            </div>

          </div>

        </article>


        {/* SPACE GROTESK */}
        <article className="tipo-secundaria">

          <div className="tipo-meta">
            <span>TIPOGRAFÍA SECUNDARIA</span>
            <span>02</span>
          </div>

          <div className="tipo-display">
            <span className="tipo-nombre">
              Space Grotesk
            </span>

            <span className="tipo-letras">
              Aa
            </span>

            <h3>
              Conecta con la cultura.
            </h3>
          </div>

          <div className="tipo-info">

            <div>
              <span>USO</span>
              <p>
                Textos corridos, descripciones, información
                complementaria y contenidos funcionales.
              </p>
            </div>

            <div>
              <span>PESOS</span>
              <p>
                400 / 500 / 600 / 700
              </p>
            </div>

          </div>

        </article>

      </div>


      {/* JERARQUÍA */}
      <section className="jerarquia">

        <div className="jerarquia-header">
          <span>03</span>
          <h2>Jerarquía tipográfica</h2>
        </div>


        <div className="jerarquia-contenido">

          <div className="jerarquia-item">
            <span className="jerarquia-label">
              H1 / OUTFIT BOLD
            </span>

            <h3 className="jerarquia-h1">
              Crear. Conectar. Explorar.
            </h3>
          </div>


          <div className="jerarquia-item">
            <span className="jerarquia-label">
              H2 / OUTFIT MEDIUM
            </span>

            <h3 className="jerarquia-h2">
              Una nueva forma de experimentar la cultura.
            </h3>
          </div>


          <div className="jerarquia-item">
            <span className="jerarquia-label">
              BODY / SPACE GROTESK
            </span>

            <p className="jerarquia-body">
              Diseñamos experiencias digitales que conectan
              tecnología, entretenimiento y cultura para crear
              experiencias memorables.
            </p>
          </div>


          <div className="jerarquia-item">
            <span className="jerarquia-label">
              SMALL / SPACE GROTESK
            </span>

            <p className="jerarquia-small">
              SISTEMA VISUAL / BRAND IDENTITY / 2026
            </p>
          </div>

        </div>

      </section>


      {/* CARACTERES */}
      <section className="caracteres">

        <div className="caracteres-header">
          <span>04</span>
          <h2>Caracteres</h2>
        </div>


        <p className="caracteres-display outfit-font">
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
        </p>

        <p className="caracteres-display outfit-font">
          Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>

        <p className="caracteres-display space-font">
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
        </p>

        <p className="caracteres-display space-font">
          Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>

        <p className="caracteres-numeros">
          0 1 2 3 4 5 6 7 8 9
        </p>

      </section>

    </section>
  );
}

export default Tipografia;