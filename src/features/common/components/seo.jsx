import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import TwitterImage from "../../../images/trustlines_foundation_twitter.png";
import OGImage from "../../../images/trustlines_foundation_fb.png";

export function SEO({ lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const metaTitle = title || site.siteMetadata.title;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: `Bringing People Powered Money to the world. The Trustlines Foundation is promoting financial inclusion for all.`,
        },
        {
          name: `author`,
          content: `Trustlines Foundation`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://trustlines.foundation/`,
        },
        {
          property: `og:title`,
          content: `Trustlines Foundation - Home`,
        },
        {
          property: `og:description`,
          content: `Bringing People Powered Money to the world`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:site_name`,
          content: `Trustlines Foundation`,
        },
        {
          property: `og:image`,
          content: 'https://trustlines.foundation' + OGImage,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: `Trustlines Foundation - Home`,
        },
        {
          name: `twitter:description`,
          content: `Bringing People Powered Money to the world`,
        },
        {
          name: `twitter:image`,
          content: 'https://trustlines.foundation' + TwitterImage,
        },
        {
          name: `twitter:site`,
          content: `@TrustlinesFound`,
        },
        {
          name: `twitter:creator`,
          content: `@TrustlinesFound`,
        },
        {
          name: `google-site-verification`,
          content: `szjiWKGtarYfnL43-zuB_KZRIQ3PA8Sk9wKErxU_nk4`,
        },
        {
          name: `msvalidate.01`,
          content: `461226232A0CE4B34E124EE5F4510557`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;
