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
import banner from "../../data/servicios/16.jpg"
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
            <SEO title="SEO"/>
            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 offset-1">
                                <h1>¿Qué es el SEO?</h1>
                                <p>El posicionamiento en buscadores u optimización de motores
                                    de búsqueda es el proceso de mejorar la visibilidad de un
                                    sitio web en los resultados orgánicos de los diferentes buscadores.
                                    También es frecuente nombrarlo por su título inglés, SEO (Search Engine Optimization).</p>
                            </div>
                            <div className="col-3 offset-1">
                                <h1> La autoridad y La relevancia</h1>
                                <p><b>La autoridad</b> es básicamente la popularidad de una web.
                                    Cuanto más popular sea más valiosa es la información que contiene.
                                    Este factor es el que un motor de búsqueda tiene más en cuenta dado que
                                    se basa en la propia experiencia del usuario. Cuanto más se comparta un
                                    contenido es que a más usuarios les ha parecido útil.</p>
                                <p><b>La relevancia</b> es la relación que tiene una página frente a
                                    una búsqueda dada. Esto no es simplemente que una página
                                    contenga un montón de veces el término buscado (en los comienzos era así)
                                    si no que un motor de búsqueda se basa en cientos de factores on-site para determinar esto.</p>

                            </div>

                            <div className="col-3 offset-1">
                                <h1>El SEO se puede dividir en dos grandes grupos:</h1>
                                <p><b>On-site:</b> El SEO on-site se preocupa de la relevancia.
                                    Se asegura de que la web está optimizada para que el
                                    motor de búsqueda entienda lo principal, que es el contenido
                                    de la misma. Dentro del SEO On-site incluiríamos la optimización de keywords,
                                    tiempo de carga, experiencia del usuario, optimización del código y formato de las URLs.</p>
                                <p><b>Off-site:</b> El SEO off-site es la parte del trabajo SEO que se centra en factores externos a
                                    la página web en la que trabajamos. Los factores más importantes en el SEO off-site son el
                                    número y la calidad de los enlaces, presencia en redes sociales, menciones en medios locales,
                                    autoridad de la marca y rendimiento en los resultados de búsqueda, es decir,
                                    el CTR que tengan nuestros resultados en un motor de búsqueda. Seguro que estás pensando
                                    que todo esto está muy bien y que es muy interesante pero que tu está aquí para saber
                                    porque necesitas el SEO en tu web y que beneficios obtendrás si lo integras en tu estrategia online.</p>
                            </div>

                        </div>


                    </div>

                </div>
                {/* End Pricing Tbale Area  */}

            </main>
            {/* End Page Wrapper  */}

            <div className="col-5 offset-1" style={{padding:"10px"}}>
                <h1 style={{color:"#001c43",textTransform:"uppercase"}}>Contáctanos para llevar tu negocio al #1</h1>
            </div>



            <ContactFormSection/>



        </Layout>
    )

}
