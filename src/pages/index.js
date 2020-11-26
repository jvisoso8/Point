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

export default () => {
    const [lang, setLang] = useState("eng");

    return (
        <Layout>

            <SEO title="Home"/>
            <Hero lang={lang} setLang={setLang}/>
            <Story lang={lang}/>
            <ClientSection lang={lang}/>


        </Layout>
    )

}