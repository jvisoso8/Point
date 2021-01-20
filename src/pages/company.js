import React, {useState} from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/company/banner'
import About from '../containers/company/about'
import Team from '../containers/company/team'
import JoinOurTeam from '../containers/company/join-our-team'
import Testimonial from '../containers/company/testimonial'
import Hero from "../containers/home-particle/hero";
import ServiceList from "../components/ServiceList/ServiceList";

export default () => {
    const [lang, setLang] = useState("eng");

    return (
        <Layout>
            <SEO title="Company"/>
            <Banner lang={lang} />
            <About lang={lang} setLang={setLang}/>

            {/* Start Service Area  */}
            <div className="service-area creative-service-wrapper ptb--120 bg_color--1">
                <div className="container">
                    <div className="row creative-service">
                        <div className="col-lg-12">
                            <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Area  */}
            {/*
            <Team lang={lang}/>
            */}
        </Layout>
    )

}
