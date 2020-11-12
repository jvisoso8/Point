import React from 'react'
import PropTypes from 'prop-types';
import {useStaticQuery, graphql, Link} from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import {StorySection, StoryInner, Content, StoryImgWrap, StoryImage} from './story.stc'
import {Controller, Scene} from 'react-scrollmagic';

const Story = ({section, paragraph, paragraphTwo, button, image, lang}) => {
    const storyQueryData = useStaticQuery(graphql`
        query ParticleStoryDataQuery {
            homeparticledataJson(id: {eq: "particle_story_section_contnet"}) {
                id
                title
                subtitle
                path
                content
                image {
                    childImageSharp {
                        fluid(maxWidth: 960, maxHeight: 950, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `)
    const storyData = storyQueryData.homeparticledataJson;
    const {title, subtitle, path, content} = storyData;
    const imageData = storyData.image.childImageSharp.fluid;
    if (lang === "eng") {
        return (
            <StorySection {...section}>
                <div className="row">
                    <div className="col-1 offset-1">
                        <div id="trigger"/>
                        <Controller>
                            <Scene classToggle="animated" triggerElement="#trigger" triggerHook="onCenter">
                                <StoryImgWrap className="rn_surface story-image">
                                    <StoryImage fluid={imageData}/>
                                </StoryImgWrap>
                            </Scene>
                        </Controller>
                    </div>
                    <div className="col-2 offset-1">
                        <StoryInner>
                            <SectionTitle
                                title={title}
                                subtitle={subtitle}
                            />
                            <Content>
                                {content.map((textData, i) => <Text
                                    key={`story-text-${i}`} {...paragraph}>{textData}</Text>)}
                                <Button as={Link} to={path} {...button}>DISCOVER MORE </Button>
                            </Content>
                        </StoryInner>
                    </div>
                </div>
            </StorySection>
        )

    } else if (lang === "esp") {
        return (
            <StorySection {...section}>
                <div className="row">
                    <div className="col-1 offset-1">
                        <div id="trigger"/>
                        <Controller>
                            <Scene classToggle="animated" triggerElement="#trigger" triggerHook="onCenter">
                                <StoryImgWrap className="rn_surface story-image">
                                    <StoryImage fluid={imageData}/>
                                </StoryImgWrap>
                            </Scene>
                        </Controller>
                    </div>
                    <div className="col-2 offset-1">
                        <StoryInner>
                            <SectionTitle
                                title={"Estamos preparados para el futuro, nuestros clientes dicen que somos las\n" +
                                "personas en quienes confían para saber cuál es la estrategia correcta en el corto, mediano y largo plazo."}
                                subtitle={"nuestra historia"}
                            />
                            <Content>
                                <Text key={`story-text-1`} {...paragraph}>Es nuestro
                                    trabajo ver hacia adelante. Es por ello que siempre estamos viendo segundos, horas y
                                    años hacia el futuro. En la medida en la que evoluciona la tecnología, así como las
                                    necesidades de nuestros clientes, nos aseguramos de que estén preparados para
                                    cualquier
                                    cosa que el futuro depare. Para lograr esto, necesitamos un conocimiento profundo de
                                    los
                                    desafíos y metas específicas que tienen nuestros clientes. Llevamos a cabo un
                                    proceso
                                    profundo a través de cuestionarios detallados y análisis de datos para identificar
                                    el
                                    origen de los problemas y mapear la totalidad del ecosistema empresarial.
                                    De esta forma, podemos diseñar soluciones que logren plasmar la visión del
                                    cliente, con un enfoque en resultados medibles antes y después de la
                                    implementación.</Text>
                                <Button as={Link} to={path} {...button}>DESCUBRE MÁS</Button>
                            </Content>
                        </StoryInner>
                    </div>
                </div>
            </StorySection>
        )
    } else if (lang === "fra") {
        return (
            <StorySection {...section}>
                <div className="row">
                    <div className="col-1 offset-1">
                        <div id="trigger"/>
                        <Controller>
                            <Scene classToggle="animated" triggerElement="#trigger" triggerHook="onCenter">
                                <StoryImgWrap className="rn_surface story-image">
                                    <StoryImage fluid={imageData}/>
                                </StoryImgWrap>
                            </Scene>
                        </Controller>
                    </div>
                    <div className="col-2 offset-1">
                        <StoryInner>
                            <SectionTitle
                                title={"Nous sommes prêts pour le futur, en effet, nos clients disent que nous sommes les personnes dans lesquels ils confient pour savoir quelle est la meilleure stratégie pour le court, moyen et long terme."}
                                subtitle={"notre histoire"}
                            />
                            <Content>
                                <Text key={`story-text-1`} {...paragraph}>C'est notre travail de continuer à voir vers
                                    l’avant. C’est pour cela que nous avons toujours une vision de secondes, heures, et
                                    années vers le futur. Dans la mesure où la technologie et les besoins de nos clients
                                    évoluent, nous nous assurons qu’ils seront préparés pour les futures éventualités.
                                    Afin d'y arriver nous devons avoir une compréhension approfondie des besoins,
                                    objectifs et challenges de nos clients. Nous nous engageons dans un processus détaillé à travers
                                    des questionnaires et des analyses de bases d'informations avec le but d'identifier
                                    les racines des causes de problèmes et schématiser la totalité du système de
                                    l'entreprise. De cette façon nous pouvons créer des solutions qui reflètent la
                                    vision du client avec la possibilité d'avoir les mesures des résultats avant et
                                    après l'implémentation</Text>
                                <Button as={Link} to={path} {...button}>Découvrir plus</Button>
                            </Content>
                        </StoryInner>
                    </div>
                </div>
            </StorySection>
        )
    }


}

Story.propTypes = {
    paragraph: PropTypes.object,
    paragraphTwo: PropTypes.object,
    button: PropTypes.object,
    section: PropTypes.object,
    image: PropTypes.object
}

Story.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    },
    paragraph: {
        color: '#000000',
        fontSize: '14px',
        lineHeight: '26px'
    },
    paragraphTwo: {
        mt: '31px'
    },
    button: {
        mt: '34px'
    },
    image: {
        backgroundPosition: '-78px 0px'
    }
}

export default Story
