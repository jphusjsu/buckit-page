import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage'
import Developers from '@/components/Developers'
import LearnMore from '@/components/LearnMore'
import Gallery from '@/components/GalleryPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Developers',
      name: 'Developers',
      component: Developers
    },
    {
      path: '/LearnMore',
      name: 'LearnMore',
      component: LearnMore
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
