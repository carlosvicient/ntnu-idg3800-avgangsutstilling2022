import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const titleTemplate = title ? (`${title} | ${defaultTitle}`) : defaultTitle;
  const imageContent = image ? image : site.siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imageContent
        },
        {
          property: `twitter:image`,
          content: imageContent
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `theme-color`,
          media: `(prefers-color-scheme: light)`,
          content: `#fdf9ed`,
        },
        {
          name: `theme-color`,
          media: `(prefers-color-scheme: dark)`,
          content: `#3e3e3e`,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `nb`,
  meta: [],
  description: ``,
  image: null
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default Seo;
