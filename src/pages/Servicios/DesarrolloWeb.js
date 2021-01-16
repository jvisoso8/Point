import React, {useState} from "react"
import Layout from "../../containers/layout/layout";
import SEO from "../../components/seo";
import {FiChevronUp, FiCheck} from "react-icons/fi";
import Banner from "../../containers/company/banner";
import About from "../../containers/company/about";
import Team from "../../components/team";
import {AboutSectionWrap, SectionTitle} from "../../containers/company/about/about.stc";
import Heading from "../../components/shared/heading";
import {BannerArea} from "../../containers/contact/contact-form/contact-form.stc";
import Image from "../../components/image";
import simple1 from "../../data/servicios/1.jpg"
import simple2 from "../../data/servicios/2.jpg"
import simple3 from "../../data/servicios/3.jpg"
import simple4 from "../../data/servicios/4.jpg"
import banner from "../../data/servicios/6.jpg"
import Button from "../../components/shared/button";
import {Link} from "gatsby";
import ContactFormSection from "../../containers/contact/contact-form";
import { FiArrowDown} from "react-icons/fi";
import {ScrollTop} from "../../containers/layout/footer/footer.stc";

const scrollHandler = () => {
    let element_to_scroll_to = document.getElementById('#examples');
    element_to_scroll_to.scrollIntoView({  behavior: 'smooth' });
   // window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default () => {
    const [lang, setLang] = useState("eng");

    return (
        <Layout >
            <div className="banner-area">
                <img src={banner} alt="pricing Banner" style={{width:"100%",height:"400px"}}/>
            </div>
            <SEO title="DesarrolloWeb"/>
            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12" style={{marginBottom: "20px"}}>
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">SITIO ESPECIALIZADO</h4>
                                            <div className="pricing">
                                                <span className="price">30,000</span>
                                                <span className="subtitle">MXN</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> 15 Paginas Interactivas</li>
                                                <li><FiCheck/> Diseño Moderno</li>
                                                <li><FiCheck/> Rápido</li>
                                                <li><FiCheck/> Representativo de tu marca</li>
                                                <li><FiCheck/> Rápido</li>
                                                <li><FiCheck/> Versión móvil</li>
                                                <li><FiCheck/> Enlace a redes sociales</li>
                                                <li><FiCheck/> Certificado SSL</li>
                                                <li><FiCheck/> Formulario de contacto</li>
                                                <li><FiCheck/> Google SEO</li>
                                                <li><FiCheck/> Uso Especializado</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="/contact">ESTOY INTERESADO!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12" style={{marginBottom: "20px"}}>
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">BÁSICO</h4>
                                            <div className="pricing">
                                                <span className="price">15,000</span>
                                                <span className="subtitle">MXN </span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> 5 Paginas Interactivas</li>
                                                <li><FiCheck/> Diseño Moderno</li>
                                                <li><FiCheck/> Rápido</li>
                                                <li><FiCheck/> Representativo de tu marca</li>
                                                <li><FiCheck/> Rápido</li>
                                                <li><FiCheck/> Versión móvil</li>
                                                <li><FiCheck/> Enlace a redes sociales</li>
                                                <li><FiCheck/> Certificado SSL</li>
                                                <li><FiCheck/> Formulario de contacto</li>
                                                <li><FiCheck/> Google SEO</li>


                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="/contact">ESTOY INTERESADO!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}



                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12" style={{marginBottom: "20px"}}>
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title" >APLICACIÓN WEB</h4>
                                            <div className="pricing">
                                                <span className="price" style={{fontSize: "60px"}}>VARIABLE</span>
                                                <span className="subtitle">MXN</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> Todo lo de SITIO ESPECIALIZADO </li>
                                                <li><FiCheck/> Todo lo que necesites</li>
                                                <li><FiCheck/> Plan echo a la medida para cumplir todas tus necesidades</li>

                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="/contact">ESTOY INTERESADO!</a>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            {/* End PRicing Table Area  */}



                        </div>
                        <ScrollTop className="creative-cursor" onClick={scrollHandler}>
                            <FiArrowDown style={{height:"100px", size:"100px", width:"auto", position:"absolute",right:"0px",padding:"10px",top:"0"}} />
                        </ScrollTop>

                    </div>

                </div>
                {/* End Pricing Tbale Area  */}

            </main>
            {/* End Page Wrapper  */}

            <div id="#examples" >
                <div style={{color:"#000", padding:"20px", textAlign:"center"}} >
                    <h1>NUESTRO PORTAFOLIO</h1>
                </div>
                <div className="row" style={{backgroundColor: "#15171B"}} >

                    <div className="col-3 vividworknav">
                        <a target="_blank" href="https://uncoverindex.com/index">
                            <img src={simple1} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                            <div class="work-text-content" style={{position: "absolute"}}>
                                <h1>APLICACIÓN WEB</h1>
                                <h3>Uncover Index </h3>
                                <p>En Desarollo</p>
                            </div>
                        </a>
                    </div>
                    <div target="_blank" className="col-3 vividworknav">
                        <a href="https://honey-pot-agency.ts.r.appspot.com">
                            <img src={simple2} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                            <div className="work-text-content" style={{position: "absolute"}}>
                                <h1>BÁSICO</h1>
                                <h3>HONEY POT AGENCY</h3>
                                <p>Agencia de Marketing Australia</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-3 vividworknav">
                        <a href="https://joy-city-291022.an.r.appspot.com" target="_blank">
                            <img src={simple3}
                                 style={{paddingLeft: "50px", paddingTop: "50px", paddingBottom: "50px"}}/>
                            <div className="work-text-content" style={{position: "absolute"}}>
                                <h1>SITIO ESPECIALIZADO</h1>
                                <h3>Joy City</h3>
                                <p>Centro Comercial China</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-3 vividworknav">
                        <a target="_blank" href="https://noicetech.com.au">
                            <img src={simple4}
                                 style={{paddingLeft: "50px", paddingTop: "50px", paddingBottom: "50px"}}/>
                            <div className="work-text-content" style={{position: "absolute"}}>
                                <h1>BÁSICO</h1>
                                <h3>NOICE TECH</h3>
                                <p>Agencia Digital Australia</p>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
            <ContactFormSection/>


            <div>
                <div className="col-3 offset-1" style={{paddingTop: "20px", paddingBottom: "20px", paddingLeft: "0px"}}>
                    <h3>Detalles</h3>
                </div>
                <div className="col-3 offset-1" style={{padding: "10px"}}>

                    <h4>Sitio Basico</h4>
                    <p>Incluye 5 paginas interactivas, pero se pueden agregar más por $1,500 por página. No incluye el contenido. No incluye fotografías. No incluye páginas especializadas como son: mapas, búsquedas avanzadas, cotizaciones, bases de datos y similares. contactar a un ejecutivo para más información.</p>

                    <h4>Sitio especializado </h4>
                    <p></p>
                </div>
            </div>

        </Layout>
    )

}
