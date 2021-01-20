import React, {useState} from "react"
import Layout from "../../containers/layout/layout";
import SEO from "../../components/seo";

import Heading from "../../components/shared/heading";
import {
    BannerArea,
    ContactFormWrap,
    ContactSectionWrap,
    ContactWrap
} from "../../containers/contact/contact-form/contact-form.stc";
import Image from "../../components/image";
import simple1 from "../../data/servicios/28.png"
import simple2 from "../../data/servicios/29.png"
import simple3 from "../../data/servicios/30.png"
import simple4 from "../../data/servicios/31.png"
import banner from "../../data/servicios/17.jpg"
import Button from "../../components/shared/button";
import {Link} from "gatsby";
import ContactFormSection from "../../containers/contact/contact-form";

import {ScrollTop} from "../../containers/layout/footer/footer.stc";
import imageData from "../../data/servicios/32.jpg";
import Text from "../../components/shared/text";
import ContactForm from "../../components/contact-form";
import {FiHome, FiUser, FiShoppingBag, FiArrowDown,} from "react-icons/fi";

const scrollHandler = () => {
    let element_to_scroll_to = document.getElementById('#examples');
    element_to_scroll_to.scrollIntoView({  behavior: 'smooth' });
   // window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default () => {
    const [lang, setLang] = useState("eng");
    const form_url  = "https://getform.io/f/43acdb57-c0c2-4a72-ae3f-50fbeb248971";
    const column="col-lg-4 col-md-6 col-sm-6 col-12 text-left";

    const ServiceList = [
        {
            icon: <FiShoppingBag />,
            title: 'Productos',
            description: '',
            url: "/Servicios/DesarrolloWeb/"
        },
        {
            icon: <FiHome />,
            title: 'Lugar',
            description: '',
            url: "/Servicios/DesarrolloApp/"
        },
        {
            icon: <FiUser />,
            title: 'Personas',
            description: '',
            url: "/Servicios/SEO"
        },

    ]

    return (
        <Layout >
            <div className="banner-area">
                <img src={banner} alt="pricing Banner" style={{width:"100%",height:"400px"}}/>
            </div>
            <SEO title="Analisis de mercado"/>
            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 ">
                                <h1 style={{color:"#001c43"}}>
                                    Obtén toda la información necesaria para tomar las mejores decisiones.</h1>
                                <h1 style={{color:"#001c43"}}> Visualiza la información de forma clara con nuestros Estudios de Mercado especializados.</h1>

                            </div>



                        </div>


                    </div>

                </div>
                {/* End Pricing Tbale Area  */}

            </main>
            {/*
            <div className="container">
                <div className="row" >
                    {ServiceList.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <div onClick={ () => {
                                let element_to_scroll_to = document.getElementById(`#${val.title}`);
                                element_to_scroll_to.scrollIntoView({  behavior: 'smooth' });
                                // window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}>
                                <div className="service service__style--2" style={{aline:"center"}}>
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            */
            }
            {/* End Page Wrapper  */}




            <div id="#examples">
                <div style={{color: "#000", padding: "20px", textAlign: "center"}}>
                    <h1>Aplicaciones</h1>
                </div>
                <div className="row" style={{backgroundColor: "#15171B"}}>

                    <div className="col-3 vividworknav">

                            <img src={simple1} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                            <div className="work-text-content" style={{position: "absolute"}}>
                                <h1>Rango Socioeconómico</h1>
                                <h3> Poiniente/Sur CDMX</h3>
                                <p>Extrapolación de datos del INEGI</p>
                            </div>

                    </div>
                    <div target="_blank" className="col-3 vividworknav">
                        <a href="https://honey-pot-agency.ts.r.appspot.com">
                            <img src={simple2} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                            <div className="work-text-content" style={{position: "absolute"}}>
                                <h1>Robos</h1>
                                <h3>En zonas con puntos de venta del cliente</h3>
                                <p>Carpeta de investigación de la PSG</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-3 vividworknav">
                        <a href="https://joy-city-291022.an.r.appspot.com" target="_blank">
                            <img src={simple3}
                                 style={{paddingLeft: "50px", paddingTop: "50px", paddingBottom: "50px"}}/>
                            <div className="work-text-content" style={{position: "absolute"}}>
                                <h1>Ubicación de Restaurantes</h1>
                                <h3>CDMX</h3>
                                <p>Locales indexados por google</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-3 vividworknav">
                        <a target="_blank" href="https://noicetech.com.au">
                            <img src={simple4}
                                 style={{paddingLeft: "50px", paddingTop: "50px", paddingBottom: "50px"}}/>
                            <div className="work-text-content" style={{position: "absolute"}}>
                                <h1>Restaurantes categorizados por precio </h1>
                                <h3>CDMX</h3>
                                <p>Locales indexados por google</p>
                            </div>
                        </a>
                    </div>


                </div>
            </div>

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
                                <Heading>Visualiza, Analiza, Ejecuta </Heading>
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
