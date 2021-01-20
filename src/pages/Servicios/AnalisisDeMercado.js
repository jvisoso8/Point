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
import banner from "../../data/servicios/17.jpg"
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
                            <div className="col-3 offset-1">
                                <h1>Utilisamos informacion especifica a tu negocio para ayudarte a tomar las mejores desiciones</h1>
                                <p>Atraves de tecnologias como visualisaccion, mapeo, big data y aprendisaje de maquina
                                    te ayudamos a tomar las mejores desiciones para tu negocio.  </p>
                            </div>



                        </div>


                    </div>

                </div>
                {/* End Pricing Tbale Area  */}

            </main>
            {/* End Page Wrapper  */}

            <div className="col-5 offset-1" style={{padding:"10px"}}>
                <h1 style={{color:"#001c43",textTransform:"uppercase"}}>
                    Obten toda la informacion que necesitas cuando la necesitas par tomar las mejores desiciones para tu negocio.
                </h1>
            </div>



            <ContactFormSection/>



        </Layout>
    )

}
