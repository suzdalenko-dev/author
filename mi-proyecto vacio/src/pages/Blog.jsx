import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
        <section class="hero-wrap hero-wrap-2">
            <div class="overlay"></div>
            <div class="container">
                <div class="row slider-text align-items-end justify-content-center">
                    <div class="col-md-9 text-center">
                        <p class="breadcrumbs">
                            <span class="me-2"><a to="" href="/">Inicio <i class="fa fa-chevron-right" aria-hidden="true"></i></a></span>
                            <span><a href="/Blog">Blog <i class="fa fa-chevron-right" aria-hidden="true"></i></a></span>
                        </p>
                        <h1 class="mb-0 bread">Entradas de blog</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="ftco-section bg-light">
            <div class="container-xl">
                <div class="row">
                   
                    <div class="col-md-6 col-lg-3 d-flex">
                        <div class="blog-entry justify-content-end">
                            <a to="" href="/Blog/Por-que-suben-los-precios-de-alquiler" class="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('/assets/img/x.jpg')"}}></a>
                            <div class="text">
                                <p class="meta"><span>Jan. 07, 2021</span><a to="" href="/Blog/Por-que-suben-los-precios-de-alquiler">0 Comentarios</a></p>
                                <h3 class="heading mb-3"><a to="" href="/Blog/Por-que-suben-los-precios-de-alquiler">Por qué suben los precios de alquiler y de la vivienda</a></h3>
                                <p>Por qué suben los precios de alquiler y de la vivienda</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        <footer class="ftco-footer">
            <div class="container-xl">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="mb-0 copyright">Copyright © Todos los derechos publicos <i class="fa fa-heart color-danger" aria-hidden="true"></i></p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Blog;
