import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Blog = () => {

  let location = useLocation();
  let searchParams = new URLSearchParams(location.search);
  let tag = searchParams.get("Tag");
  let [tags, setTags] = useState([]);
  let [filteredPosts, setFilteredPosts] = useState([]); // Nuevo estado para los posts filtrados


  useEffect(() => {
    let pageTitle = "Blog -  Listado de entradas - Alexey Suzdalenko - Más que desarrollo";
    let description = "Suzdalenko Alexey - Más que desarrollo";
    if (tag) {
      pageTitle = `Tag #${tag} - Desarrollo Web/Android - Alexey Suzdalenko`;
      description = `Listado de entradas de blog relacionadas con #${tag}`;
    }
    document.title = pageTitle;
    let metaDescription = document.querySelector("meta[name='description']");
    metaDescription.setAttribute("content", description || "Suzdalenko Alexey - Más que desarrollo");

    let listTags = [];
    window.content.map((article) => {
      if (article && article.tags.length > 0) {
        article.tags.map((tag) => { if (!listTags.includes(tag)) { listTags.push(tag); }; });
      }
    });
    setTags(listTags);

    // Filtrar los posts que contienen el tag seleccionado
    let filtered = window.content.filter((post) => 
      !tag || (post.tags && post.tags.includes(tag)) // Muestra todos si no hay tag
    );
    setFilteredPosts(filtered);


    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <section className="hero-wrap hero-wrap-2">
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text align-items-end justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="me-2"><Link to="/" >Inicio <i className="fa fa-chevron-right"></i></Link></span>
                <span><a href="/Blog">Blog <i className="fa fa-chevron-right"></i></a></span>
              </p>
              <h1 className="mb-0 bread">Entradas de blog</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row">

            {filteredPosts.map(post => (
              <div className="col-md-6 col-lg-3 d-flex" key={post.id}>
                <div className="blog-entry justify-content-end">
                  <Link to={`/Blog/${post.slug}/${post.id}`} className="block-20 img d-flex align-items-end" style={{ backgroundImage: `url(${post.preview})` }}></Link>
                  <div className="text">
                    <p className="meta">
                      <span>{post.date}</span>
                      <Link href={`/Blog/${post.slug}/${post.id}`}>0 Comentarios</Link>
                    </p>
                    <h3 className="heading mb-3">
                      <Link to={`/Blog/${post.slug}/${post.id}`}>{post.title}</Link>
                    </h3>
                    <div className="tagcloud">
                      {post && post.tags && post.tags.map((item, index) => (
                        <Link to={`/Blog?Tag=${item}`} className="tag-cloud-link" key={index}>{item}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Etiquetas</h4>
              <div className="tagcloud">
              <Link to="/Blog" className="tag-cloud-link">Todos</Link>
                {tags && tags.map((item, index) => (
                  <Link to={`/Blog?Tag=${item}`} className="tag-cloud-link" key={index}>{item}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="ftco-footer">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0 copyright">Copyright © Todos los derechos publicos <i className="fa fa-heart color-danger"></i></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
