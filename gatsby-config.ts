import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.mjs
    siteTitle: `Sun -Chocolate-`,
    siteTitleAlt: `Niko's Portfolio`,
    siteHeadline: `Sun -Chocolate-`,
    siteUrl: `https://twitter.com/LeafNiko`,
    siteDescription: `This site is Niko's portfolio.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@LeafNiko`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Niko`,
        location: `Kobe`,
        socialMedia: [
          {
            title: `Twitter`,
            href: `https://twitter.com/LeafNiko`
          },
          {
            title: `Booth`,
            href: `https://leafniko.booth.pm/`
          },
          {
            title: `Skeb`,
            href: `https://skeb.jp/@LeafNiko`
          },
          {
            title: `Pixiv`,
            href: `https://www.pixiv.net/users/72577`
          },
          {
            title: `MelonBooks`,
            href: `https://www.melonbooks.co.jp/circle/index.php?circle_id=110207`
          },
          {
            title: `Instagram`,
            href: `https://www.instagram.com/leaf_niko/`
          },
          {
            title: `Maro`,
            href: `https://marshmallow-qa.com/leafniko?utm_medium=url_text&utm_source=promotion`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
