// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/style/index.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.meta.push({
    name: 'keywords',
    content: 'Portfolio,Blog,Blogfolio,VR,AR,Web,Developer,Mobile',
  })
  head.meta.push({
    name: 'theme-color',
    content: '#DEC79B',
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
