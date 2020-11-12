import React, {useState} from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/company/banner'
import About from '../containers/company/about'
import Team from '../containers/company/team'
import JoinOurTeam from '../containers/company/join-our-team'
import Testimonial from '../containers/company/testimonial'
import Hero from "../containers/home-particle/hero";

export default () => {
    const [lang, setLang] = useState("eng");

    return (
        <Layout>
            <SEO title="Company"/>
            <Banner lang={lang} />
            <About lang={lang} setLang={setLang}/>
            <Team lang={lang}/>
        </Layout>
    )

}
