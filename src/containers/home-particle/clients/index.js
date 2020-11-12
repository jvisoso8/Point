import React from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery, graphql, Link} from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import ClientList, {Client} from '../../../components/client-list'
import {ClientSectionWrap, ClientWrap, ClientLeft, ClientRight} from './clients.stc'
import {Content, StoryImage, StoryImgWrap, StoryInner, StorySection} from "../story/story.stc";
import {Controller, Scene} from "react-scrollmagic";
import Text from "../../../components/shared/text";
import Button from "../../../components/shared/button";

const ClientSection = ({section, lang}) => {
    const clientQueryData = useStaticQuery(graphql`
        query ParticleClientQuery {
            homeparticledataJson(id: {eq: "particle_clients_section_content"}) {
                title
                subtitle
            }
            allClientsJson(limit: 6) {
                edges {
                  node {
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
                }
            }
        }      
    `)
    const clientSecData = clientQueryData.homeparticledataJson;
    const clients = clientQueryData.allClientsJson.edges;

    if (lang === "eng") {
        return (
            <ClientSectionWrap {...section}>
                <div className="row align-items-center">
                    <div className="col-4 offset-1">
                        <ClientWrap>
                            <ClientLeft>
                                <SectionTitle
                                    title={clientSecData.title}
                                    subtitle={clientSecData.subtitle}
                                />
                            </ClientLeft>
                            <ClientRight>
                                <ClientList>
                                    {clients.map((client, i) => (
                                        <Client
                                            key={`client-${i}`}
                                            link={client.node.link}
                                            client_image={client.node.image.childImageSharp.fluid}
                                        />
                                    ))}
                                </ClientList>
                            </ClientRight>
                        </ClientWrap>
                    </div>
                </div>
            </ClientSectionWrap>
        )

    } else if (lang === "esp") {
        return (
            <ClientSectionWrap {...section}>
                <div className="row align-items-center">
                    <div className="col-4 offset-1">
                        <ClientWrap>
                            <ClientLeft>
                                <SectionTitle
                                    title={"Hemos trabajado con empresas de distintos" +
                                    "tamaños y sectores, desde startups hasta grandes empresas de desarrollo inmobiliario. Esto nos ha otorgado la amplitud y" +
                                    "versatilidad para poder enfrentarnos a diversos problemas complejos. Ofreciendo soluciones tecnológicas a la medida."}
                                    subtitle={"nuestros clientes"}
                                />
                            </ClientLeft>
                            <ClientRight>
                                <ClientList>
                                    {clients.map((client, i) => (
                                        <Client
                                            key={`client-${i}`}
                                            link={client.node.link}
                                            client_image={client.node.image.childImageSharp.fluid}
                                        />
                                    ))}
                                </ClientList>
                            </ClientRight>
                        </ClientWrap>
                    </div>
                </div>
            </ClientSectionWrap>
        )
    } else if (lang === "fra") {
        return (
            <ClientSectionWrap {...section}>
                <div className="row align-items-center">
                    <div className="col-4 offset-1">
                        <ClientWrap>
                            <ClientLeft>
                                <SectionTitle
                                    title={"Nous avons travaillé avec des entreprises de différentes tailles et secteurs, de start up a grandes entreprises de développement immobilier. Ceci nous a donné de la grandeur" +
                                    "et de la versatilité, afin de pouvoir faire face à la complexité des différents problèmes. Ceci nous permet de proposer des technologies faites à la mesure."}
                                    subtitle={"nos clients"}
                                />
                            </ClientLeft>
                            <ClientRight>
                                <ClientList>
                                    {clients.map((client, i) => (
                                        <Client
                                            key={`client-${i}`}
                                            link={client.node.link}
                                            client_image={client.node.image.childImageSharp.fluid}
                                        />
                                    ))}
                                </ClientList>
                            </ClientRight>
                        </ClientWrap>
                    </div>
                </div>
            </ClientSectionWrap>
        )
    }

}

ClientSection.propTypes = {
    paragraph: PropTypes.object
}

ClientSection.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    }
}

export default ClientSection
