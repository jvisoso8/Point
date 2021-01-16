import React, {useState} from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-particle/hero'
import Story from '../containers/home-particle/story'
import ProjectSection from '../containers/home-particle/project'
import TestimonialSection from '../containers/home-particle/testimonial'
import ClientSection from '../containers/home-particle/clients'
import VideoSection from '../containers/home-particle/video'
import BlogSection from '../containers/home-particle/blog'
import Button from "../components/shared/button";
import ServiceList from "../components/ServiceList/ServiceList";

export default () => {
    const [lang, setLang] = useState("esp");

    return (
        <Layout>

            <SEO title="Home"/>
            <Hero lang={lang} setLang={setLang}/>


            {/* Start Service Area  */}
            <div className="service-area creative-service-wrapper ptb--120 bg_color--1">
                <div className="container">
                    <div className="row creative-service">
                        <div className="col-lg-12">
                            <ServiceList item="7" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Area  */}

            <Story lang={lang}/>
            <ClientSection lang={lang}/>


        </Layout>
    )

}