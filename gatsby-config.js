module.exports = {
  siteMetadata: {
    title: 'Refiloe Digoamaye | My site',
    author: 'Refiloe Digoamaye',
    description: 'My portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/ms-icon-310x310.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

plugins: [
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /C:\Users\kroni\gatsby-starter-dimension\src\images\logos.svg/,
      },
    },
  },
] // This is used to insert svg for the logo. need to figure out to display it.
