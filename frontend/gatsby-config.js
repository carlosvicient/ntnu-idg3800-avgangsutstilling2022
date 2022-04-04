const { maxHeaderSize } = require("http");

module.exports = {
  pathPrefix: "/carlosvm/avgangsutstilling",
  siteMetadata: {
    title: `Avgangsutstilling`,
    description: `31 studenter fra Bachelor i grafisk design, 29 studenter fra Bachelor interaksjonsdesign og 18 studenter fra Bachelor i webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser utvalgte arbeider fra egenportefølje. Utstillingen inkluderer studentarbeider for papirbaserte og elektroniske medier. Kjerneområder for de ulike studieretningene vil for grafisk design være typografi og informasjonsdesign. Interaksjonsdesign har hatt fokus på tjenestedesign og å utforme løsninger som støtter opp under menneskers kommunikasjon og samhandling. For webutvikling er innovative og brukervennlige webløsninger vektlagt. Fellesnevnere for allestudieretningene er universell utforming samt brukersentrert design og utvikling.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "y2aw28t3",
        dataset: "production",
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "y2aw28t3",
        dataset: "production",
        defaultImageConfig : {
          quality: 75,
          fit: 'max',
          auto: 'format'
        }
      },
    },
    {
      resolve: `gatsby-plugin-preact`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
