import React ,{ Component }from "react";
import { FiUsers , FiMonitor, FiTablet, FiSearch, FiShoppingCart, FiCamera, FiCrosshair,FiActivity ,FiBarChart2,FiMove,FiBarChart} from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiMonitor />,
        title: 'Desarrollo Web',
        description: 'Creamos sitios web impactantes, adaptados a todas las necesidades de tu negocio. Destaca. Cuenta tu historia. Encuentra más y mejores clientes que nunca.',
        url: "/Servicios/DesarrolloWeb/"
    },
    {
        icon: <FiTablet />,
        title: 'Desarrollo de Apps',
        description: 'Tomamos tu brillante idea de aplicación y te ayudamos a moldearla en una forma que funcione sin problemas y lleve su visión a la vida.',
        url: "/service-details/AppDevelopment"
    },
    {
        icon: <FiSearch />,
        title: 'SEO',
        description: 'Te ayudamos a disparar tu ranking de google al optimizar el contenido de tu sitio web y desarrollar contenido continuo eficiente en palabras clave. Alcanza clientes que buscan tus productos.',
        url: "/service-details/SEO"
    },
    {
        icon: <FiMove />,
        title: 'Análisis de Mercado',
        description: 'We help you reach thousands of potential customers and tell your story in a persuasive, creative and memorable way.',
        url: "/service-details/SocialMediaMarketing"
    },
    {
        icon: <FiShoppingCart />,
        title: 'E-Commerce',
        description: 'Llevamos a tu negocio al siguiente nivel abriendo canales de venta completamente nuevos. Vende directo a tus clientes y obtén una mayor utilidad a través de una experiencia perfecta innovadora.',
        url: "/service-details/ECommerce"
    },
    {
        icon:  <FiCamera />,
        title: 'Fotografía',
        description: ' We give you a whole new layer of insight into your customers, your competitors and your business. Get custom metrics and reports every month and continuously keep a pulse on your business.',
        url: "/service-details/Analytics"
    },
    {
        icon:  <FiBarChart />,
        title: 'Facebook & Google Analytics',
        description: ' Te brindamos información sobre tus clientes y tu negocio. Obtén métricas e informes personalizados cada mes y mantén un pulso continuo en tu negocio aprovechando el poder de los datos.',
        url: "/service-details/Analytics"
    },
    {
        icon:  <FiUsers />,
        title: 'Marketing',
        description: ' Te ayudamos a alcanzar miles de clientes potenciales y a contar tu historia de manera persuasiva, creativa y memorable.',
        url: "/service-details/Analytics"
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row" >
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.url}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
