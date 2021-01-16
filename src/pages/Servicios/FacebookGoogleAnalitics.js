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
                                            <h4 className="title">PAQUETE INTERMEDIO</h4>
                                            <div className="pricing">
                                                <span className="price">5,000 </span>
                                                <span className="subtitle">MXN primer mes, despues 1,200 MXN mensuales</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> Setup</li>
                                                <li><FiCheck/> Reporte mensual</li>
                                                <li><FiCheck/> Monitoreo de eventos específicos</li>
                                                <li><FiCheck/> Primer Curso de capacitación</li>
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
                                            <h4 className="title">PAQUETE BÁSICO</h4>
                                            <div className="pricing">
                                                <span className="price">3,000</span>
                                                <span className="subtitle">MXN primer mes, despues 1,000 MXN mensuales </span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> Setup</li>
                                                <li><FiCheck/> Reporte mensual </li>
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

            <div id="#examples">
                <div className="row" style={{backgroundColor: "#15171B"}}>
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

                    <h4>
                        Paquetes
                    </h4>
                    <p>Estos precios estan calculados para un sitio mediano de 5-10 paginas</p>

                    <h4>
                        Cursos
                    </h4>
                    <p>Curso de capacitación básico (45 mins) sesión única 1,000 MXN </p>
                    <p>Curso de capacitación Intermedio (2 horas) dos sesiones de una hora 2,000 MXN </p>

                    <p></p>
                </div>
            </div>

        </Layout>
    )

}
