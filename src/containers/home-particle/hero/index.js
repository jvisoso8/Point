import React from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery, graphql, Link} from "gatsby"
import Particles from 'react-particles-js';
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import Anchor from '../../../components/shared/link'
import {
    HeroArea,
    HeroBg,
    ContetnTop,
    ContentWrapper,
    ContentBottom,
    ContentBottomInner,
    ContentBottomLeft,
    ContentBottomRight,
    ClientWrap,
    ClientItem
} from './hero.style';
import {FooterMenuList} from "../../layout/footer/footer-menu/footer-menu.stc";
import Layout from "../../layout/layout";
import {CloseButtonWrap} from "../../../components/shared/close-button/close-button.style";

const Hero = (props) => {
    const heroQueryData = useStaticQuery(graphql`
    query ParticleHeroDataQuery {
      homeparticledataJson(id: {eq: "particle_hero_section_content"}) {
        title
        title1
        title2
        titleEsp
        title1Esp
        title2Esp
        date
        btn_link
        clients{
          id
          link
          image {
            childImageSharp {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
        bg_image {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 950, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }  
  `);
    const heroData = heroQueryData.homeparticledataJson;
    const imageData = heroData.bg_image.childImageSharp.fluid;
    const {title,title1,title2,titleEsp,title1Esp,title2Esp, date, btn_link, clients} = heroData;
    const particleOpt = {
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }
    const {descStyle, headingStyle} = props
    if(props.lang==="eng"){
        console.log("eng")
        return (
            <HeroArea>
                <HeroBg fluid={imageData}/>
                <Particles className="particle" params={particleOpt}/>
                <ContentWrapper>
                    <ContetnTop>

                        <div className="col-6 offset-1">
                            {date && <Text {...descStyle}>{date}</Text>}
                            {title && <Heading {...headingStyle}> {title} <br/>{title1} {title2} </Heading>}
                            {btn_link &&
                            <Button fontSize="20px" as={Link} to={btn_link} layout={2}>Discover More <i
                                className="ti-arrow-right"></i> </Button>}

                        </div>
                    </ContetnTop>
                    <ContentBottom>
                        <div className="col-4 offset-1">
                            <ContentBottomInner>
                                <ContentBottomLeft>
                                    <Text {...descStyle} mb="0">WE'VE BUILT SOLUTIONS FOR...</Text>
                                </ContentBottomLeft>
                                <ContentBottomRight>
                                    {clients && (
                                        <ClientWrap>
                                            {clients.map(client => (
                                                <ClientItem key={client.id}>
                                                    <Anchor path={client.link}>
                                                        <img src={client.image.childImageSharp.fluid.src} alt="client"/>
                                                    </Anchor>
                                                </ClientItem>
                                            ))}
                                        </ClientWrap>
                                    )}
                                </ContentBottomRight>
                                <br/>
                                {/*
                                <Button style={{color:"#fff"}} fontSize="20px"  layout={1} onClick={()=> {
                                    console.log("click")
                                    props.setLang("esp")
                                }} >español</Button>
                                <Button style={{color:"#fff"}} fontSize="20px"  layout={1} onClick={()=> {
                                    console.log("click")
                                    props.setLang("eng")
                                }} >English</Button>*/}

                            </ContentBottomInner>
                        </div>
                    </ContentBottom>
                </ContentWrapper>
            </HeroArea>
        )

    }
    else if(props.lang === "esp"){
        console.log("esp")
        return (
            <HeroArea>
                <HeroBg fluid={imageData}/>
                <Particles className="particle" params={particleOpt}/>
                <ContentWrapper>
                    <ContetnTop>

                        <div className="col-6 offset-1">
                            {date && <Text {...descStyle}>{date}</Text>}
                            {title && <Heading {...headingStyle}> {titleEsp} <br/>{title1Esp} {title2Esp} </Heading>}
                            {btn_link &&
                            <Button fontSize="20px" as={Link} to={btn_link} layout={2}>Discover More <i
                                className="ti-arrow-right"></i> </Button>}

                        </div>
                    </ContetnTop>
                    <ContentBottom>
                        <div className="col-4 offset-1">
                            <ContentBottomInner>
                                <ContentBottomLeft>
                                    <Text {...descStyle} mb="0">WE'VE BUILT SOLUTIONS FOR...</Text>
                                </ContentBottomLeft>
                                <ContentBottomRight>
                                    {clients && (
                                        <ClientWrap>
                                            {clients.map(client => (
                                                <ClientItem key={client.id}>
                                                    <Anchor path={client.link}>
                                                        <img src={client.image.childImageSharp.fluid.src} alt="client"/>
                                                    </Anchor>
                                                </ClientItem>
                                            ))}
                                        </ClientWrap>
                                    )}
                                </ContentBottomRight>
                                <br/>
                                <Button style={{color:"#fff"}} fontSize="20px"  layout={1} onClick={()=> {
                                    console.log("click")
                                    props.setLang("esp")
                                }} >español</Button>
                                <Button style={{color:"#fff"}} fontSize="20px"  layout={1} onClick={()=> {
                                    console.log("click")
                                    props.setLang("eng")
                                }} >English</Button>
                            </ContentBottomInner>
                        </div>
                    </ContentBottom>
                </ContentWrapper>
            </HeroArea>
        )
    }



}

Hero.propTypes = {
    descStyle: PropTypes.object,
    headingStyle: PropTypes.object,
    buttonStyle: PropTypes.object
}

Hero.defaultProps = {
    descStyle: {
        color: '#fff',
        fontweight: 300,
        fonSize: '16px',
        texttransform: 'uppercase',
        letterspacing: '2px',
        mb: '12px'
    },
    headingStyle: {
        as: 'h1',
        color: '#fff',
        fontSize: '48px',
        mb: '55px',
        responsive: {
            xlarge: {
                fontSize: '33px'
            },
            large: {
                fontSize: '25px',
                mb: '40px'
            },
            medium: {
                fontSize: '20px'
            }
        }
    },
}

export default Hero
 