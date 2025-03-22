import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogItem = () => {
    let { itemId } = useParams();
    let [post, setPost] = useState(null);
    let [countPosts, setCountPosts] = useState(0);
    let [tags, setTags] = useState([]);

    useEffect(() => {
        if (window.content) {
            let foundPost = window.content.find((item) => item.id == itemId);
            setPost(foundPost);
            let listTags = [];
            window.content.map((article) => {
                if(article && article.tags.length > 0) {
                    article.tags.map((tag) => { if(!listTags.includes(tag)) { listTags.push(tag); };});
                }
            });
            setTags(listTags);
        }
        window.scrollTo(0, 0);
    }, [itemId]);

    useEffect(() => {
        if (post) {
            document.title = post.title || "Suzdalenko Alexey - Más que desarrollo";
            let metaDescription = document.querySelector("meta[name='description']");
            metaDescription.setAttribute("content", post.description || "Suzdalenko Alexey - Más que desarrollo");
        }
    }, [post]);

    useEffect(() => {
        if (window.content) {
            setCountPosts(window.content.length - 1);
        }
    }, [window.content, itemId]);
    

    return (
        <div>
            <section className="suzdal-wrap">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-center">
                        <div className="col-md-9 pt-5 text-center">
                            <p className="breadcrumbs sbread">
                                <span className="me-2"><Link to="/">Inicio <i className="fa fa-chevron-right"></i></Link></span>
                                <span className="me-2"><Link to="/Blog">Blog <i className="fa fa-chevron-right"></i></Link></span>
                                <span><a href={`/Blog/${post && post.slug}/${post && post.id}`}>Entrada</a></span></p>
                            <a href={`/Blog/${post && post.slug}/${post && post.id}`}><h1 className="mb-0 bread suzdal-wrap">{post && post.title}</h1></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row g-lg-5">
                        <div className="col-lg-8 blog-single">
                            {post && <div className="text-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>}
                            <div className="tag-widget post-tag-container mb-5 mt-5">
                                <div className="tagcloud">
                                    {post && post.tags && post.tags.map((item, index) => (
                                        <a href="#" className="tag-cloud-link" key={index}>{item}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="about-author d-flex p-4 bg-light rounded">
                                {/* <div className="bio me-md-4 img" style={{ backgroundImage: "url('/assets/img/x.jpg')" }}></div> */}
                                <div className="desc">
                                    <h3>Resumen</h3>
                                    <p className="text-content">{post && post.description}</p>
                                    <p className="text-content">Fecha: {post && post.date}</p>
                                </div>
                            </div>
                            {/* 
                            <div className="pt-5 mt-5">
                                <h3 className="mb-5 head-title">6 Comments</h3>
                                <ul className="comment-list">
                                    <li className="comment">
                                        <div className="vcard bio">
                                            <img src="images/person_1.jpg" alt="Image placeholder" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>John Doe</h3>
                                            <div className="meta">January 07, 2021 at 10:10am</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                                                necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente
                                                iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply">Reply</a></p>
                                        </div>
                                    </li>
                                    <li className="comment">
                                        <div className="vcard bio">
                                            <img src="images/person_1.jpg" alt="Image placeholder" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>John Doe</h3>
                                            <div className="meta">January 07, 2021 at 10:10am</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                                                necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente
                                                iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply">Reply</a></p>
                                        </div>
                                        <ul className="children">
                                            <li className="comment">
                                                <div className="vcard bio">
                                                    <img src="images/person_1.jpg" alt="Image placeholder" />
                                                </div>
                                                <div className="comment-body">
                                                    <h3>John Doe</h3>
                                                    <div className="meta">January 07, 2021 at 10:10am</div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                                                        laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe
                                                        enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
                                                    </p>
                                                    <p><a href="#" className="reply">Reply</a></p>
                                                </div>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <div className="vcard bio">
                                                            <img src="images/person_1.jpg" alt="Image placeholder" />
                                                        </div>
                                                        <div className="comment-body">
                                                            <h3>John Doe</h3>
                                                            <div className="meta">January 07, 2021 at 10:10am</div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                                                quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                                                                officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                                                                impedit necessitatibus, nihil?</p>
                                                            <p><a href="#" className="reply">Reply</a></p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="comment">
                                        <div className="vcard bio">
                                            <img src="images/person_1.jpg" alt="Image placeholder" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>John Doe</h3>
                                            <div className="meta">January 07, 2021 at 10:10am</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                                                necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente
                                                iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply">Reply</a></p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="comment-form-wrap pt-5">
                                    <h3 className="mb-5 head-title">Leave a comment</h3>
                                    <form action="#" className="p-4 p-lg-5 comment-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="name">Name *</label>
                                                    <input type="text" className="form-control" id="name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="email">Email *</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label for="website">Website</label>
                                                    <input type="url" className="form-control" id="website" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label for="message">Message</label>
                                                    <textarea name id="message" cols="30" rows="10" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-4 sidebar pl-md-4">
                            <div className="sidebar-box bg-light rounded">
                                <form action="#" className="search-form">
                                    <div className="form-group">
                                        <span className="icon fa fa-search"></span>
                                        <input type="text" className="form-control" placeholder="Buscar..." />
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-box">
                                <h3>¿A qué me dedico?</h3>
                                <div className="d-md-flex">
                                    <ul className="categories me-md-4">
                                        <li><a href="#">UI/UX y experiencia del usuario en aplicaciones</a></li>
                                        <li><a href="#">Desarrollo de software</a></li>
                                        <li><a href="#">Desarrollo de APIs REST</a></li>
                                        <li><a href="#">Laravel, Symfony, Django, Vue, React, etc.</a></li>
                                        <li><a href="#">Automatización y DevOps</a></li>
                                        <li><a href="#">Business Intelligence con Power BI</a></li>
                                        <li><a href="#">Modelado de datos con Python, DAX</a></li>
                                    </ul>
                                    <ul className="categories ms-md-4">
                                        <li><a href="#">Integraciones con bases de datos SQL y NoSQL</a></li>
                                        <li><a href="#">Desarrollo de aplicaciones Android con Kotlin y Flutter</a></li>
                                        <li><a href="#">Seguridad en aplicaciones web y móviles</a></li>
                                        <li><a href="#">Diseño y desarrollo de productos digitales</a></li>
                                        <li><a href="#">Consultoría y asesoría tecnológica</a></li>
                                        <li><a href="#"></a>Análisis y transformación de datos</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-box">
                                <h3>Últimas entradas {countPosts}</h3>
                                {window.content.map((item, index) =>  {
                                    if (item.id == itemId) {return; }
                                    return (
                                        <div className="block-21 mb-4 d-flex" key={index}>
                                            <Link to={`/Blog/${item.slug}/${item.id}`} className="blog-img me-4" style={{ backgroundImage: `url(${item.preview})` }}></Link>
                                            <div className="text">
                                                <h3 className="heading"><Link to={`/Blog/${item.slug}/${item.id}`}>{item.title}</Link></h3>
                                                <div className="meta">
                                                    <div><a href="#"><span className="fa fa-calendar"></span> {item.date}</a></div>
                                                    <div><a href="#"><span className="fa fa-comment"></span> 0</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="sidebar-box">
                                <h3>Etiquetas</h3>
                                <div className="tagcloud">
                                    {tags && tags.map((item, index) => (
                                        <Link to={`/Blog?Tag=${item}`} className="tag-cloud-link" key={index}>{item}</Link>
                                    ))}
                                </div>
                            </div>
                            <div className="sidebar-box">
                                <h3>Paragraph</h3>
                                <p>"La verdadera innovación no solo está en el código que escribimos, sino en las ideas que defendemos: libertad para crear, pensar y expresarse sin imposiciones ni dogmas, porque el progreso real surge del pensamiento crítico, no de la censura disfrazada de justicia."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="ftco-footer">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="mb-0 copyright">Copyright © Todos los derechos publicos <i className="fa fa-heart color-danger" ></i> </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlogItem;
