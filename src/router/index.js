import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Developers from '@/components/Developers'
import LearnMore from '@/components/LearnMore'
import Gallery from '@/components/GalleryPage'
import PDFReport from '@/components/PDFReport'
import PDFPresentation from '@/components/PDFPresentation'
import Youtube from '@/components/YoutubePage'

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
    },
    {
      path: '/PDFReport',
      name: 'PDFReport',
      component: PDFReport
    },
    {
      path: '/PDFPresentation',
      name: 'PDFPresentation',
      component: PDFPresentation
    },
    {
      path: '/Youtube',
      name: 'Youtube',
      component: Youtube
    }
  ]
})
