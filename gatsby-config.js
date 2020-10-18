/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        title: "Point Technologies",
        titleTemplate: `Point.`,
        description: `We know tech, let us be your strategic partner and place you at the vanguard of the digital transformation. Maximize your efficiency through our technological tools and innovative strategies.`,
        author: `Jose Visoso`,
        twitterUsername: ``,
        image: 'bg-image-1.jpg',
        siteUrl: 'https://pointech.dev',
        form_url: "https://getform.io/f/43acdb57-c0c2-4a72-ae3f-50fbeb248971",
        contact: {
            postal_code: 'Sydney, Australia <br/> Mexico City, Mexico',
            address: ' Minerva 72, colonia crédito constructor 03940, Benito Juárez CDMX',
            email: 'Jvisoso8@hotmail.com',
            company_email: 'example@yourcompany.com',
            company_address: ' Minerva 72, colonia crédito constructor 03940, Benito Juárez CDMX',
            phone: '+52 1 55 7845 7977',
            phone2: '+52 1 55 4454 5417',
            social: {
                facebook: 'https://facebook.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://linkedin.com',
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
                name: `Thern`,
                short_name: `Thern`,
                start_url: `/`,
                background_color: `#333333`,
                theme_color: `#001c43`,
                display: `standalone`,
                "icons": [
                    {
                        "src": "/icons/icon-72x72.png",
                        "sizes": "72x72",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/icon-96x96.png",
                        "sizes": "96x96",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/icon-128x128.png",
                        "sizes": "128x128",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/icon-144x144.png",
                        "sizes": "144x144",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/icon-152x152.png",
                        "sizes": "152x152",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/icon-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/icon-384x384.png",
                        "sizes": "384x384",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/icon-512x512.png",
                        "sizes": "512x512",
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
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Poppins`,
                        subsets: [`latin`],
                        variants: [`300`, `300i`, `400`, `400i`, `500`, `600`, `700`, `900`]
                    }
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
                trackingId: "UA-158680515-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "example.com",
            },
        },
    ]
}
