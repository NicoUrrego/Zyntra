import "./Logotipo.css";

function Logotipo() {
    return (
        <section className="logotipo">

            {/* =========================
          ENCABEZADO
      ========================= */}

            <header id="Logotipo" className="logotipo">

                <div className="logotipo-index">
                    <span>03</span>
                    <span>BRAND BOOK</span>
                </div>

                <div className="logotipo-title">
                    <p>IDENTIDAD VISUAL</p>
                    <h1>Logotipo</h1>
                </div>

                <div className="logotipo-intro">
                    <p>
                        Sistema visual que representa la identidad,
                        personalidad y esencia de la marca.
                    </p>
                </div>

            </header>


            {/* =========================
          LOGOTIPO PRINCIPAL
      ========================= */}

            <section className="logo-display">

                <div className="logo-display-top">
                    <span>01 / LOGOTIPO PRINCIPAL</span>
                    <span>PRIMARY MARK</span>
                </div>

                <div className="logo-placeholder">

                    <img
                        src="src/imagenes/Zyntra-Logotipo1.png"
                        alt="Logotipo de la marca"
                        className="logo-real"
                    />

                    

                </div>

                <div className="logo-display-bottom">
                    <span>LOGO / 001</span>
                    <span>PRIMARY VERSION</span>
                </div>

            </section>


            {/* =========================
          TARJETAS DE INFORMACIÓN
      ========================= */}

            <section className="logo-info-grid">


                {/* TARJETA CONCEPTO */}

                <article className="logo-card logo-card-large">

                    <div className="logo-card-number">
                        02
                    </div>

                    <div className="logo-card-content">

                        <span className="logo-card-label">
                            CONCEPTO
                        </span>

                        <h2>
                            El concepto
                            <br />
                            detrás del logo.
                        </h2>

                        <div className="logo-card-line"></div>

                        <p>
                            Agrega aquí la descripción del concepto,
                            inspiración y significado detrás del logotipo.
                        </p>

                    </div>

                </article>


                {/* DESCRIPCIÓN */}

                <article className="logo-card logo-card-turquoise">

                    <div className="logo-card-number">
                        03
                    </div>

                    <div className="logo-card-content">

                        <span className="logo-card-label">
                            DESCRIPCIÓN
                        </span>

                        <h2>
                            ¿Qué
                            <br />
                            representa?
                        </h2>

                        <p>
                            Describe aquí qué representa el logotipo
                            y cómo se relaciona con los valores de la marca.
                        </p>

                    </div>

                </article>


                {/* CONSTRUCCIÓN */}

                <article className="logo-card logo-card-neon">

                    <div className="logo-card-number">
                        04
                    </div>

                    <div className="logo-card-content">

                        <span className="logo-card-label">
                            CONSTRUCCIÓN
                        </span>

                        <h2>
                            Construcción
                            <br />
                            del ícono
                        </h2>

                        <div className="construction-placeholder">
                            
                            <img src="src/imagenes/Zyntra-icono.svg" alt="icono" className="logo-real"/>
                        </div>

                    </div>

                </article>


                {/* ÁREA DE SEGURIDAD */}

                <article className="logo-card logo-card-dark">

                    <div className="logo-card-number">
                        05
                    </div>

                    <div className="logo-card-content">

                        <span className="logo-card-label">
                            ÁREA DE SEGURIDAD
                        </span>

                        <h2>
                            Espacio
                            <br />
                            protegido
                        </h2>

                        <div className="safe-area-placeholder">

                            <div className="safe-area-box">
                                <span>LOGO</span>
                            </div>

                        </div>

                        <p>
                            Define aquí el espacio mínimo que debe
                            mantenerse alrededor del logotipo.
                        </p>

                    </div>

                </article>


                {/* TAMAÑO MÍNIMO */}

                <article className="logo-card logo-card-outline">

                    <div className="logo-card-number">
                        06
                    </div>

                    <div className="logo-card-content">

                        <span className="logo-card-label">
                            TAMAÑO MÍNIMO
                        </span>

                        <h2>
                            Escala
                            <br />
                            mínima
                        </h2>

                        <div className="size-placeholder">

                            <div className="size-logo">
                                LOGO
                            </div>

                            <div className="size-line">
                                <span>MIN.</span>
                                <span>_____ px</span>
                            </div>

                        </div>

                        <p>
                            Especifica aquí el tamaño mínimo
                            recomendado para el uso del logotipo.
                        </p>

                    </div>

                </article>


                {/* VERSIONES */}

                <article className="logo-card logo-card-blue">

                    <div className="logo-card-number">
                        07
                    </div>

                    <div className="logo-card-content">

                        <span className="logo-card-label">
                            VERSIONES
                        </span>

                        <h2>
                            Variaciones
                            <br />
                            del ícono
                        </h2>

                        <div className="versions">

                            <div className="version">
                                <div className="version-placeholder">
                                    <img src="src/imagenes/Zyntra-icono.svg" alt="icono" className="logo-real"/>
                                </div>
                                <span>01 / PRIMARY</span>
                            </div>

                            <div className="version">
                                <div className="version-placeholder">
                                    <img src="src/imagenes/Zyntra-icono-redondo-negro.svg" alt="icono2" className="logo-real"/>
                                </div>
                                <span>02 / SECONDARY</span>
                            </div>

                            <div className="version">
                                <div className="version-placeholder">
                                    <img src="src/imagenes/Zyntra-icono-punteado.svg" alt="icono3" className="logo-real"/>
                                </div>
                                <span>03 / SYMBOL</span>
                            </div>

                        </div>

                    </div>

                </article>


            </section>


            {/* =========================
          CIERRE
      ========================= */}

            <footer className="logotipo-footer">

                <div className="footer-line"></div>

                <div className="footer-content">

                    <span>02 / 06</span>

                    <p>
                        LOGOTIPO
                    </p>

                    <span>
                        BRAND IDENTITY
                    </span>

                </div>

            </footer>

        </section>
    );
}

export default Logotipo;