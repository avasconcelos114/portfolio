// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/*.sass'),
      ],
    })
}


module.exports = {
  siteName: 'Portfolio',
  siteDescription: 'Andre Vasconcelos\'s portfolio & blog. Come follow his journey across the tech landscape as he tries to make sense of the latest trends in AR, VR, Web, and Mobile development!',
  siteUrl: 'https://avasconcelos114.github.io',
  pathPrefix: '/portfolio',
  icon: './src/assets/img/personal_logo_dark_32.png',
  plugins: [
    // {
    //   use: '@gridsome/vue-remark',
    // },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/*/*.md',
        route: '/blog/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      }
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // '@gridsome/remark-prismjs'
      ]
    }
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })
  }
}
