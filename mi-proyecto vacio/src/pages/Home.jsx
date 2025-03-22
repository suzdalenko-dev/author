import React from "react";

const Home = () => {
  return (
      <div className="hero-wrap">
        <div className="container-xl">
          <div className="row slider-text align-items-center align-items-stretch justify-content-between">
            <div className="col-lg-6 text d-flex align-items-start align-items-sm-center">
              <div className="mt-md-0">

                <span className="subheading">UI/UX DISEÑADOR  &amp; PROGRAMADOR</span>
                <br /><br />
                <h1 className="mb-4">¡Hola! <br /> Mi nombre es Alexey</h1>

                <h5>Desarrollo de aplicaciones Web, aplicaciones Android, automatización de procesos, programación. <br /> Analítica de datos, elaboración de informes y la integración. DAX, Power Bi.</h5>
                <br />
                <p>
                  <a target="_blank" href="mailto:alexey.suzdalenko@outlook.com" className="btn btn-primary p-4 py-3">Contacto email<span className="ion-ios-arrow-round-forward"></span></a>
                  <a href="https://api.whatsapp.com/send?phone=34657666135&text=Hola" className="btn btn-white p-4 py-3"><i className="fab fa-whatsapp"></i> WhatsApp 657 666 135<span className="ion-ios-arrow-round-forward"></span></a>
                </p>

                <p className="mb-0 copyright">Copyright © 2024 Todos los derechos publicos <i className="fa fa-heart color-danger"></i> <br />
                  <a className="titleLink" target="_blank" href="/sitemap.xml"><i className="fa-solid fa-sitemap"></i></a>
                  <a className="titleLink" target="_blank" href="https://github.com/suzdalenko-dev"><i className="fa-brands fa-github"></i></a>
                  <a className="titleLink" target="_blank" href="https://www.youtube.com/@AlexeySuzdalenko"><i className="fa-brands fa-youtube"></i></a>
                  <a className="titleLink" target="_blank" href="https://github.com/suzdalenko"><i className="fa-brands fa-github"></i></a>
                  <a className="titleLink" target="_blank" href="https://www.linkedin.com/in/suzdalenko-dev/"><i className="fa-brands fa-linkedin"></i></a>
                </p>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-end justify-content-end">
              <div className="tns-outer" id="tns1-ow">
                <div id="tns1-mw" className="tns-ovh">
                  <div className="tns-inner" id="tns1-iw">
                    <div className="carousel-about  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal">
                      <div className="item tns-item tns-slide-cloned">
                        <img src="/assets/img/x.jpg" className="img-fluid" alt="persona Alexey Suzdalenko - UI/UX DISEÑADOR & PROGRAMADOR" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 

  );
};

export default Home;
