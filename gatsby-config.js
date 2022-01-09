module.exports = {
  siteMetadata: {
    siteUrl: "https://www.temur.dev",
    title: "Temur",
    description: "Temur' personal website portfolio",
    author: "Temurbek Sabirov",
    image:
      "https://temur.dev/static/99a3213d9a19eb9d4b30a62e181cd80c/c1587/portrait.webp",
  },
  plugins: [
    "gatsby-plugin-dts-css-modules",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/content/gif`,
              dest: `${__dirname}/public/static/gifs`,
              play: `${__dirname}/src/img/play.gif`,
              placeholder: `${__dirname}/src/img/play.gif`,
              loading: `${__dirname}/src/img/play.gif`,
              relativePath: `/static/gifs`,
            },
          },
        ],
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
