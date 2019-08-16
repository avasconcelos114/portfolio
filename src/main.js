// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/style/index.scss'
import Image from '~/assets/img/personal_logo_transparent_256.png'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.meta.push({
    name: 'description',
    content: 'Andre Vasconcelos\'s blogfolio. Come follow his journey across the tech landscape as he tries to make sense of the latest trends in AR, VR, Web, and Mobile development!',
  })
  head.meta.push({
    name: 'keywords',
    content: 'Portfolio,Blog,Blogfolio,VR,AR,Web,Developer,Mobile',
  })
  head.meta.push({
    name: 'theme-color',
    content: '#DEC79B',
  })
  head.meta.push({
    name: 'og:image',
    content: Image,
  })
  head.meta.push({
    name: 'og:image:height',
    content: '256',
  })
  head.meta.push({
    name: 'og:image:width',
    content: '256',
  })
  head.meta.push({
    name: 'og:title',
    content: 'Andre Vasconcelos - Blogfolio',
  })
  head.meta.push({
    name: 'og:description',
    content: 'Andre Vasconcelos\'s blogfolio. Come follow his journey across the tech landscape as he tries to make sense of the latest trends in AR, VR, Web, and Mobile development!',
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
