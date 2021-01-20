import React, {useState} from "react"
import Layout from "../../containers/layout/layout";
import SEO from "../../components/seo";
import {FiCheck,

    FiHome,
    FiUser,
    FiShoppingBag, FiArrowDown,
} from "react-icons/fi";

import simple1 from "../../data/servicios/fotos/1.jpg"
import simple2 from "../../data/servicios/fotos/2.jpg"

import simple4 from "../../data/servicios/fotos/4.jpg"
import simple5 from "../../data/servicios/fotos/5.jpg"

import simple8 from "../../data/servicios/fotos/8.jpg"
import simple9 from "../../data/servicios/fotos/9.jpg"
import simple11 from "../../data/servicios/fotos/11.jpg"

import simple12 from "../../data/servicios/fotos/12.jpg"
import simple13 from "../../data/servicios/fotos/13.jpg"
import simple14 from "../../data/servicios/fotos/14.jpg"
import simple16 from "../../data/servicios/fotos/16.jpg"


import simple17 from "../../data/servicios/fotos/17.jpg"
import simple18 from "../../data/servicios/fotos/18.jpg"
import simple19 from "../../data/servicios/fotos/19.jpg"
import simple20 from "../../data/servicios/fotos/20.jpg"
import simple21 from "../../data/servicios/fotos/21.jpg"


import banner from "../../data/servicios/32.jpeg"

import ContactFormSection from "../../containers/contact/contact-form";
import {ScrollTop} from "../../containers/layout/footer/footer.stc";
import {
    BannerArea,
    ContactFormWrap,
    ContactSectionWrap,
    ContactWrap
} from "../../containers/contact/contact-form/contact-form.stc";
import imageData from "../../data/servicios/34.jpg";
import Text from "../../components/shared/text";
import Heading from "../../components/shared/heading";
import ContactForm from "../../components/contact-form";



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




export default () => {
    const [lang, setLang] = useState("eng");
    const column="col-lg-4 col-md-6 col-sm-6 col-12 text-left";
    const form_url  = "https://getform.io/f/43acdb57-c0c2-4a72-ae3f-50fbeb248971";
    return (
        <Layout >
            <div className="banner-area">
                <img src={banner} alt="pricing Banner" style={{width:"100%",height:"400px"}}/>
            </div>
            <SEO title="Fotografia"/>

            <div className="container" style={{padding:"50px"}}>
                <div className="row">
                    <div className="col-4">
                        <h1 style={{color:"#001c43",textTransform:"uppercase"}}>NORMAL VS LIFESYLE</h1>
                        <p>La fotografía normal presenta tu producto de una manera clara para el cliente con un fondo de color predeterminado.
                            La fotografía lifestyle cuenta una historia en una imagen y
                            utiliza una varedad de artículos y lugares para darle vida a tu producto.
                        </p>

                    </div>
                </div>
            </div>

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
            {/* Start Page Wrapper  */}




            <main className="page-wrapper" id="#Productos">
                <div className="container" style={{color:"#000", paddingLeft:"50px",paddingTop:"50px", textAlign:"left"}} >
                    <h1>Productos</h1>
                    <h4>Permite a tus clientes observar en mayor detalle cómo es el producto que quieren comprar y optimiza su experiencia digital.</h4>
                </div>
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12" style={{marginBottom: "20px"}}>
                                <div className="rn-pricing ">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Normales</h4>
                                            <div className="pricing">
                                                <span className="price">2,500</span>
                                                <span className="subtitle">MXN</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> 10 fotografias</li>
                                                <li><FiCheck/> 1 producto</li>
                                                <li><FiCheck/> Fondo de un color</li>


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
                                            <h4 className="title">Lifestyle</h4>
                                            <div className="pricing">
                                                <span className="price">4,000</span>
                                                <span className="subtitle">MXN </span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> 15 fotografias</li>
                                                <li><FiCheck/> 1 producto</li>
                                                <li><FiCheck/> 1 set</li>
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


                        {/* End PRicing Table Area  */}



                    </div>


                </div>


                {/* End Pricing Tbale Area  */}

            </main >
            <div  >

                <div className="row" style={{backgroundColor: "#15171B"}} >

                    <div className="col-2 ">
                        <img src={simple1} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                        <img src={simple9} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                    </div>
                    <div target="_blank" className="col-2 ">
                        <img src={simple2} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                        <img src={simple4} style={{paddingLeft: "50px", paddingTop: "50px", paddingBottom: "50px"}}/>
                        <img src={simple5} style={{paddingLeft: "50px", paddingTop: "50px", paddingBottom: "50px"}}/>
                    </div>
                    <div className="col-2 ">
                        <img src={simple8} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                        <img src={simple11} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                    </div>
                </div>
            </div>

            <main id="#Lugar" className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="container" style={{color:"#000", paddingLeft:"50px",paddingTop:"50px", textAlign:"left"}} >
                    <h1>Lugar</h1>
                    <h4>Cuenta tu historia del modo más llamativo y creativo al reflejar los detalles y características de tu espacio a través de diferentes ángulos.</h4>
                </div>

                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12" style={{marginBottom: "20px"}}>
                                <div className="rn-pricing ">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Normales</h4>
                                            <div className="pricing">
                                                <span className="price">3,000</span>
                                                <span className="subtitle">MXN</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> 15 fotografias</li>
                                                <li><FiCheck/> 1 ubicacion</li>
                                                <li><FiCheck/> ubicacion menor a 500m</li>

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
                                            <h4 className="title">Lifestyle</h4>
                                            <div className="pricing">
                                                <span className="price" style={{textSize:"40px"}}>variable</span>
                                                <span className="subtitle">MXN </span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> 30 fotografias</li>
                                                <li><FiCheck/> 1 ubicacion</li>
                                                <li><FiCheck/> Decoracion</li>
                                                <li><FiCheck/> Iluminacion</li>
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


                        {/* End PRicing Table Area  */}



                    </div>


                </div>


                {/* End Pricing Tbale Area  */}

            </main>

            <div  >

                <div className="row" style={{backgroundColor: "#15171B"}} >

                    <div className="col-2 ">
                        <img src={simple14} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                    </div>
                    <div target="_blank" className="col-2 ">

                        <img src={simple12} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                        <img src={simple13} style={{paddingLeft: "50px", paddingTop: "50px"}}/>


                    </div>
                    <div className="col-2 ">

                        <img src={simple16} style={{paddingLeft: "50px", paddingTop: "50px"}}/>
                    </div>
                </div>
            </div>


            {/* End Page Wrapper  */}
            <main id="#Personas" className="page-wrapper">
                <div className="container" style={{color:"#000", paddingLeft:"50px",paddingTop:"50px", textAlign:"left"}} >
                    <h1>Personas</h1>
                    <h4>Cuenta tu historia del modo más llamativo y creativo al reflejar los detalles
                        y característicaTransmite el mensaje adecuado con la imagen adecuada.
                        Permite que tus imágenes sobresalgan y muestra al mundo tu singularidad.</h4>
                </div>
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12" style={{marginBottom: "20px"}}>
                                <div className="rn-pricing ">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Normales</h4>
                                            <div className="pricing">
                                                <span className="price">1,000</span>
                                                <span className="subtitle">MXN</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> 10 fotografias</li>
                                                <li><FiCheck/> 1 persona</li>
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
                                            <h4 className="title">Lifestyle</h4>
                                            <div className="pricing">
                                                <span className="price">3,000</span>
                                                <span className="subtitle">MXN </span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>
                                                <li><FiCheck/> 15 fotografias</li>
                                                <li><FiCheck/> 1 persona</li>
                                                <li><FiCheck/> Styling</li>
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


                        {/* End PRicing Table Area  */}



                    </div>


                </div>


                {/* End Pricing Tbale Area  */}

            </main>
            <div>

                <div className="row" style={{backgroundColor: "#15171B"}} >

                    <div className="col-2 ">

                        <img src={simple20} style={{paddingLeft: "50px", paddingTop: "50px", paddingBottom: "50px"}}/>
                    </div>
                    <div target="_blank" className="col-2 ">
                        <img src={simple19} style={{paddingLeft: "50px", paddingTop: "50px", paddingBottom: "50px"}}/>
                        <img src={simple18} style={{paddingLeft: "50px", paddingTop: "50px"}}/>


                    </div>
                    <div className="col-2 ">
                        <img src={simple21} style={{paddingLeft: "50px", paddingTop: "50px"}}/>

                    </div>
                </div>
            </div>


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
                                <Heading>Permítenos capturar el momento y cuenta tu historia.</Heading>
                            </div>
                            <ContactFormWrap>
                                <ContactForm url={form_url} />
                            </ContactFormWrap>
                        </ContactWrap>
                    </div>
                </div>
            </ContactSectionWrap>

            <main className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <h1>Adiccionales</h1>
                        <div className="row">
                            {/* Start PRicing Table Area  */}

                            <div className="col-lg-4 col-md-6 col-12" style={{marginBottom: "20px"}}>

                                <div className="rn-pricing ">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Modelos</h4>
                                            <div className="pricing">
                                                <span className="price">1,000+</span>
                                                <span className="subtitle">MXN/hora</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>

                                            </ul>
                                        </div>
                                        <div className="pricing-footer">

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
                                            <h4 className="title">Lugares Especiales</h4>
                                            <div className="pricing">
                                                <span className="price">2,000+</span>
                                                <span className="subtitle">MXN</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>

                                            </ul>
                                        </div>
                                        <div className="pricing-footer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12" style={{marginBottom: "20px"}}>
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Lugares fuera de la CDMX</h4>
                                            <div className="pricing">
                                                <span className="price">Viáticos</span>
                                                <span className="subtitle">a cuenta del cliente</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1" style={{listStyle: "none"}}>

                                            </ul>
                                        </div>
                                        <div className="pricing-footer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Para un proyecto más ambicioso, contacta a un ejecutivo</p>

                        </div>


                        {/* End PRicing Table Area  */}



                    </div>


                </div>


                {/* End Pricing Tbale Area  */}

            </main>
            {/* End Page Wrapper  */}




        </Layout>
    )

}
