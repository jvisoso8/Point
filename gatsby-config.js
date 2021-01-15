/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        title: "Point Tech",
        titleTemplate: `Point.`,
        description: `Sabemos de tecnología, déjanos ser tu aliado estratégico y colocarte a la vanguardia de la transformación digital. Maximiza tu eficiencia a través de nuestras herramientas tecnológicas y estrategias innovadoras.`,
        author: `Jose Visoso`,
        twitterUsername: ``,
        image: 'bg-image-1.jpg',
        siteUrl: 'https://pointech.dev',
        form_url: "https://getform.io/f/43acdb57-c0c2-4a72-ae3f-50fbeb248971",
        contact: {
            postal_code: 'Sydney, Australia <br/> Mexico City, Mexico',
            address: ' Minerva 72, colonia crédito constructor 03940, Benito Juárez CDMX',
            email: 'contacto@pointech.dev',
            company_email: 'contacto@pointech.dev',
            company_address: ' Minerva 72, Colonia Crédito Constructor 03940, Benito Juárez CDMX',
            phone: '+52 1 55 7845 7977',
            phone2: '+52 1 55 4454 5417',
            social: {
                facebook: 'https://www.facebook.com/Pointech.consulting',
                twitter: 'https://www.instagram.com/pointech.dev/',
                linkedin: 'https://www.linkedin.com/company/point-tech-consulting/',
                dribbble: 'https://dribbble.com'
            }
        },
        copyright: "Point. All Rights Reserved"
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-json`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Point`,
                short_name: `Point`,
                start_url: `/`,
                background_color: `#333333`,
                theme_color: `#001c43`,
                display: `standalone`,
                "icons": [
                    {
                        "src": "/icons/Point Logo.png",
                        "sizes": "72x72",
                        "type": "image/png"
                    }
                ]
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://pointech.dev',
                sitemap: 'https://pointech.dev/sitemap.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1920
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [

                        `Poppins\:300,300i,400,400i,500,600,700,900`,


                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/img/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-LMH0J4DQ8E",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                anonymize: false,
                // Setting this parameter is also optional
                respectDNT: false,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,

            },
        },
    ]
}
