import React from 'react';
import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from "gatsby"
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import {AboutSectionWrap, SectionTitle, AboutContent, ProjectTypeList} from './about.stc'
import Button from "../../../components/shared/button";

const About = ({HeadingStyle, TextStyle, ProjectTypeHeading, ProjectTypeText, lang, setLang}) => {
    const aboutQueryData = useStaticQuery(graphql`
        query AboutDataQuery {
            aboutdataJson(id: {eq: "about-intro-content"}) {
                id
                title
                desc
                content
                featured_work {
                    id
                    title
                    achivments
                }
            }
        }      
    `);
    const {title, desc, content, featured_work} = aboutQueryData.aboutdataJson;
    const delay = [200];
    if (lang === "eng") {
        return (
            <>{/*
                <div style={{float: "right", zIndex: "10", paddingTop: "13px"}}>

                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("esp")
                    }}>español</Button>

                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("eng")
                    }}>English</Button>

                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("fra")
                    }}>Français</Button>
                </div>
                */}
                <AboutSectionWrap>
                    <div className="">

                        {(title || desc) && (
                            <div className="col-4 offset-1">
                                <SectionTitle>
                                    {title && <Heading {...HeadingStyle}>{title}</Heading>}

                                </SectionTitle>
                            </div>
                        )}
                        {content && (
                            <div className="col-4 offset-1">
                                <AboutContent>
                                    <br/>
                                    <Text>{content}</Text>
                                </AboutContent>
                            </div>
                        )}
                    </div>
                    {featured_work && (
                        <div className="row section-pt-md">
                            <div className="col-4 offset-1">
                                <div className="content row">
                                    {featured_work.map((work, i) => {
                                        delay.push(delay[i] + 200)
                                        return (
                                            <div
                                                key={work.id}
                                                className="col-1 project-type wow fadeInLeft"
                                                data-wow-delay={`${delay}ms`}
                                                data-wow-duration="1000ms">
                                                {work.title && <Heading {...ProjectTypeHeading}>{work.title}</Heading>}
                                                {work.achivments && (
                                                    <ProjectTypeList>
                                                        {work.achivments.map((achiv, i) => (
                                                            <li key={`${work.id}-${i}`}>
                                                                <Text {...ProjectTypeText}>{achiv}</Text></li>
                                                        ))}
                                                    </ProjectTypeList>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </AboutSectionWrap>
            </>
        )
    } else if (lang === "esp") {
        return (
            <>
                <div style={{float: "right", zIndex: "10", paddingTop: "10px"}}>

                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("esp")
                    }}>español</Button>
                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("eng")
                    }}>English</Button>
                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("fra")
                    }}>Français</Button>
                </div>
                <AboutSectionWrap>
                    <div className="">

                        {(title || desc) && (
                            <div className="col-4 offset-1">
                                <SectionTitle>
                                    {title &&
                                    <Heading {...HeadingStyle}>Cuando trabajas con Point. obtienes la experiencia de un
                                        equipo holístico que piensa de forma efectiva y a largo plazo para determinar
                                        soluciones apropiadas para tus necesidades comerciales, tecnológicas y de
                                        presupuesto.</Heading>}

                                </SectionTitle>
                            </div>
                        )}
                        {content && (
                            <div className="col-4 offset-1">
                                <AboutContent>
                                    <br/>
                                    <Text>{content}</Text>
                                </AboutContent>
                            </div>
                        )}
                    </div>
                    {featured_work && (
                        <div className="row section-pt-md">
                            <div className="col-4 offset-1">
                                <div className="content row">
                                    {featured_work.map((work, i) => {
                                        delay.push(delay[i] + 200)
                                        return (
                                            <div
                                                key={work.id}
                                                className="col-1 project-type wow fadeInLeft"
                                                data-wow-delay={`${delay}ms`}
                                                data-wow-duration="1000ms">
                                                {work.title && <Heading {...ProjectTypeHeading}>{work.title}</Heading>}
                                                {work.achivments && (
                                                    <ProjectTypeList>
                                                        {work.achivments.map((achiv, i) => (
                                                            <li key={`${work.id}-${i}`}>
                                                                <Text {...ProjectTypeText}>{achiv}</Text></li>
                                                        ))}
                                                    </ProjectTypeList>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </AboutSectionWrap>
            </>
        )
    } else if (lang === "fra") {
        return (
            <>
                <div style={{float: "right", zIndex: "10", paddingTop: "10px"}}>

                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("esp")
                    }}>español</Button>
                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("eng")
                    }}>English</Button>
                    <Button style={{color: "#656464"}} fontSize="20px" layout={1} onClick={() => {
                        console.log("click")
                        setLang("fra")
                    }}>Français</Button>
                </div>
                <AboutSectionWrap>
                    <div className="">

                        {(title || desc) && (
                            <div className="col-4 offset-1">
                                <SectionTitle>
                                    {title && <Heading {...HeadingStyle}>{title}</Heading>}

                                </SectionTitle>
                            </div>
                        )}
                        {content && (
                            <div className="col-4 offset-1">
                                <AboutContent>
                                    <br/>
                                    <Text>{content}</Text>
                                </AboutContent>
                            </div>
                        )}
                    </div>
                    {featured_work && (
                        <div className="row section-pt-md">
                            <div className="col-4 offset-1">
                                <div className="content row">
                                    {featured_work.map((work, i) => {
                                        delay.push(delay[i] + 200)
                                        return (
                                            <div
                                                key={work.id}
                                                className="col-1 project-type wow fadeInLeft"
                                                data-wow-delay={`${delay}ms`}
                                                data-wow-duration="1000ms">
                                                {work.title && <Heading {...ProjectTypeHeading}>{work.title}</Heading>}
                                                {work.achivments && (
                                                    <ProjectTypeList>
                                                        {work.achivments.map((achiv, i) => (
                                                            <li key={`${work.id}-${i}`}>
                                                                <Text {...ProjectTypeText}>{achiv}</Text></li>
                                                        ))}
                                                    </ProjectTypeList>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </AboutSectionWrap>
            </>
        )
    }

}

About.propTypes = {
    HeadingStyle: PropTypes.object,
    TextStyle: PropTypes.object
}

About.defaultProps = {
    HeadingStyle: {
        fontSize: '40px',
        texttransform: 'capitalize',
        lineHeight: '55px',
        color: 'primary',
        fontweight: 600,
        responsive: {
            medium: {
                fontSize: '24px',
                lineHeight: 'initial'
            },
            small: {
                fontSize: '25px',
                lineHeight: '35px'
            }
        }
    },
    TextStyle: {
        lineHeight: '26px'
    },
    ProjectTypeHeading: {
        as: 'h6',
        color: 'primary',
        fontSize: '12px',
        fontweight: 700,
        letterspacing: '2px',
        mb: '12px'
    },
    ProjectTypeText: {
        m: 0,
        fontSize: '12px',
        color: '#000000',
        letterspacing: '1px'
    }
}

export default About;