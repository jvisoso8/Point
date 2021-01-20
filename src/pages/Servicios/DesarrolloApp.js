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
import simple1 from "../../data/servicios/app1.jpg"
import simple2 from "../../data/servicios/app2.jpg"

import banner from "../../data/servicios/13.jpg"
import Button from "../../components/shared/button";
import {graphql, Link, useStaticQuery} from "gatsby";
import ContactFormSection from "../../containers/contact/contact-form";
import { FiArrowDown} from "react-icons/fi";
import {ScrollTop} from "../../containers/layout/footer/footer.stc";
import ContactForm from "../../components/contact-form";
import Text from "../../components/shared/text";

const scrollHandler = () => {
    let element_to_scroll_to = document.getElementById('#examples');
    element_to_scroll_to.scrollIntoView({  behavior: 'smooth' });
   // window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default () => {

    const form_url  = "https://getform.io/f/43acdb57-c0c2-4a72-ae3f-50fbeb248971";
    const [lang, setLang] = useState("eng");

    return (
        <Layout >
            <div className="banner-area">
                <img src={banner} alt="pricing Banner" style={{width:"100%",height:"400px"}}/>
            </div>
            <SEO title="DesarrolloApliaciones"/>
            <div className="row">
                <div className="col-5 offset-1" style={{padding:"10px"}}>
                    <h1 style={{color:"#001c43",textTransform:"uppercase"}}>Desarolla tu Aplicación</h1>


                    <p>
                        Nos encantaría discutir contigo cómo podemos colaborar. Debajo puedes encontrar algunas preguntas que nos ayudan a entender mejor tus necesidades. Por favor compártenos tanta información como te parezca necesario y nosotros te contactaremos.
                    </p>

                </div>

                <div className="col-2 offset-1">
                    <h4 style={{color:"#001c43",textTransform:"uppercase"}}> Información para nosotros</h4>
                    <ul style={{listStyle: "none"}}>
                        <li>
                            ¿Cuál es el problema a resolver?
                        </li>
                        <li>
                            ¿Qué tan rápido te gustaría que empecemos?
                        </li>
                        <li>
                            ¿Estás buscando un enfoque optimizado en diseño, de desarrollo o los dos?
                        </li>
                        <li>
                            ¿Cuál es tu presupuesto aproximado para el proyecto?
                        </li>
                        <li>
                            ¿En qué plataformas buscas desarrollar tu proyecto?
                        </li>
                        <li>
                            ¿Tu producto está ligado a un dispositivo o hardware?
                        </li>
                        <li>
                            ¿Este es un producto nuevo, o existe en el mercado?
                        </li>
                    </ul>

                </div>
                <div className="col-2">
                    <h4 style={{color:"#001c43",textTransform:"uppercase"}}> Información para ti</h4>
                    <ul >
                        <li>
                            Nuestro equipo, por lo general, trabaja de la mano con el tuyo
                        </li>
                        <li>
                            Un buen desarrollo de software inicia con una buena experiencia del usuario
                        </li>
                        <li>
                            Trabajamos principalmente con iOS y Android
                        </li>
                        <li>
                            Las métricas de análisis y los prototipos son esenciales para validar decisiones
                        </li>
                    </ul>
                </div>


            </div>

            <ContactSectionWrap>
                <div className="row align-items-center">
                    <div className="col-2 offset-1">
                        <ContactWrap>
                            <div className="rn-project-meta-inner">
                                <Text ></Text>
                                <Heading >Tu proyecto inicia aquí:</Heading>
                            </div>
                            <ContactFormWrap>
                                <ContactForm url={form_url} />
                            </ContactFormWrap>
                        </ContactWrap>
                    </div>
                </div>
            </ContactSectionWrap>



            <div id="#examples" >
                <div style={{color:"#000", padding:"20px", textAlign:"center"}} >
                    <h1>NUESTRO PORTAFOLIO</h1>
                </div>
                <div className="row" style={{backgroundColor: "#15171B"}} >

                    <div className="col-3 vividworknav">

                            <img src={simple1} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                            <div class="work-text-content" style={{position: "absolute"}}>
                                <h1>RC Forums</h1>
                                <h3> </h3>
                                <p>En Desarollo</p>
                            </div>

                    </div>
                    <div target="_blank" className="col-3 vividworknav">

                            <img src={simple2} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                            <div className="work-text-content" style={{position: "absolute"}}>
                                <h1>HOFLAR</h1>
                                <h3></h3>
                                <p>EN desarollo</p>
                            </div>

                    </div>




                </div>
            </div>





        </Layout>
    )

}
