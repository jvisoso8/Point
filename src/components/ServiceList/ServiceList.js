import React ,{ Component }from "react";
import { FiUsers , FiMonitor, FiTablet, FiSearch, FiShoppingCart, FiBarChart } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiMonitor />,
        title: 'Web Development',
        description: 'We create stunning, impactful websites customised for all your business needs. Stand out. Tell your story. Find more, better customers than ever before.',
        url: "/service-details/webDevelopment"
    },
    {
        icon: <FiTablet />,
        title: 'App Development',
        description: 'We take your brilliant App idea, help you shape it in a way that works smoothly, and bring your vision to life.',
        url: "/service-details/AppDevelopment"
    },
    {
        icon: <FiSearch />,
        title: 'SEO',
        description: 'We help you skyrocket your Google ranking by optimising your website content and developing ongoing, keyword-optimised content. Reach customers when they’re in the mindset of finding you.',
        url: "/service-details/SEO"
    },
    {
        icon: <FiUsers />,
        title: 'Social Media Marketing',
        description: 'We help you reach thousands of potential customers and tell your story in a persuasive, creative and memorable way.',
        url: "/service-details/SocialMediaMarketing"
    },
    {
        icon: <FiShoppingCart />,
        title: 'E-Commerce Web Development',
        description: 'We take your business to the next level by opening an entirely new sales channel for you. Sell direct to your customers and get a greater cut of the profit while offering a seamless experience.',
        url: "/service-details/ECommerce"
    },
    {
        icon:  <FiBarChart />,
        title: 'Facebook & Google Analytics',
        description: ' We give you a whole new layer of insight into your customers, your competitors and your business. Get custom metrics and reports every month and continuously keep a pulse on your business.',
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
