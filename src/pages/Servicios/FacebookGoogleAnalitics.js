import React, {useState} from "react"
import Layout from "../../containers/layout/layout";
import SEO from "../../components/seo";
import {FiChevronUp, FiCheck} from "react-icons/fi";
import Banner from "../../containers/company/banner";
import About from "../../containers/company/about";
import Team from "../../components/team";
import {AboutSectionWrap, SectionTitle} from "../../containers/company/about/about.stc";
import Heading from "../../components/shared/heading";
import {
    BannerArea,
    ContactFormWrap,
    ContactSectionWrap,
    ContactWrap
} from "../../containers/contact/contact-form/contact-form.stc";
import Image from "../../components/image";
import simple1 from "../../data/servicios/1.jpg"
import simple2 from "../../data/servicios/2.jpg"
import simple3 from "../../data/servicios/3.jpg"
import simple4 from "../../data/servicios/4.jpg"
import banner from "../../data/servicios/35.jpg"
import Button from "../../components/shared/button";
import {Link} from "gatsby";
import ContactFormSection from "../../containers/contact/contact-form";
import { FiArrowDown} from "react-icons/fi";
import {ScrollTop} from "../../containers/layout/footer/footer.stc";
import imageData from "../../data/servicios/36.jpg";
import Text from "../../components/shared/text";
import ContactForm from "../../components/contact-form";

const scrollHandler = () => {
    let element_to_scroll_to = document.getElementById('#examples');
    element_to_scroll_to.scrollIntoView({  behavior: 'smooth' });
   // window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default () => {
    const [lang, setLang] = useState("eng");
    const form_url  = "https://getform.io/f/43acdb57-c0c2-4a72-ae3f-50fbeb248971";
    return (
        <Layout >
            <div className="banner-area">
                <img src={banner} alt="pricing Banner" style={{width:"100%",height:"400px"}}/>
            </div>
            <SEO title="FAcebook and google analytics"/>
            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container" style={{padding:"50px"}}>
                        <div className="row">
                            <div className="col-5">
                                <h1 style={{color:"#001c43"}}>El mundo ha cambiado tan rápido que es imposible seguir tomando decisiones
                                    únicamente por intuición o  tradición. La recolección y análisis de datos son esenciales
                                    para la toma de decisiones del empresario moderno.</h1>
                                <h3></h3>

                            </div>
                        </div>
                    </div>
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


                    </div>

                </div>
                {/* End Pricing Tbale Area  */}

            </main>
            {/* End Page Wrapper  */}

            <ContactSectionWrap>
                <div className="row align-items-center">
                    <div className="col-2" >
                        <BannerArea id="contact-form-banner">
                            <img src={imageData} alt="Contact" />
                        </BannerArea>
                    </div>
                    <div className="col-2 offset-1">
                        <ContactWrap>
                            <div className="rn-project-meta-inner">
                                <Text >CONTACTANOS</Text>
                                <Heading>Asegúrate de tener la información necesaria para tomar las mejores decisiones.</Heading>
                            </div>
                            <ContactFormWrap>
                                <ContactForm url={form_url} />
                            </ContactFormWrap>
                        </ContactWrap>
                    </div>
                </div>
            </ContactSectionWrap>




        </Layout>
    )

}
