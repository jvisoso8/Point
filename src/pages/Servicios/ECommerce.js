import React, {useState} from "react"
import Layout from "../../containers/layout/layout";
import SEO from "../../components/seo";

import banner from "../../data/servicios/27.jpg"

import ContactFormSection from "../../containers/contact/contact-form";


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
            <SEO title="E-comerce"/>
            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 offset-1">

                                <p>Las PyMEs pueden aumentar considerablemente sus ventas al tener un sitio web efectivo.
                                </p>
                            </div>
                            <div className="col-3 offset-1">

                                <p>Al brindarles a los clientes la posibilidad de que ordenen o soliciten los
                                    productos o servicios por la red, la experiencia de compra se hace mucho más
                                    fácil y accesible. </p>


                            </div>

                            <div className="col-3 offset-1">
                                <p>Tu negocio estará en operación las 24 horas del día,
                                    los 365 días del año y las distancias ya no serán un obstáculo.</p>
                            </div>

                        </div>


                    </div>

                </div>
                {/* End Pricing Tbale Area  */}

            </main>
            {/* End Page Wrapper  */}




            <ContactFormSection/>



        </Layout>
    )

}
