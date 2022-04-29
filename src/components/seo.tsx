/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, title }) => {
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
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const image = site.siteMetadata?.image;
  const author = site.siteMetadata?.author;

  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {title} | {defaultTitle}
        </title>
        <link rel="canonical" href="http://www.temur.dev" />
        <meta name="description" content={metaDescription} />
        <meta name="title" property="og:title" content={title} />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content={image} />
        <meta
          name="description"
          property="og:description"
          content={metaDescription}
        />
        <meta name="author" content={author} />
      </Helmet>
    </div>
  );
};

Seo.defaultProps = {
  lang: `en`,
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
