import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Skills from '@/components/Skills';
import Introduce from '@/components/Introduce';
import School from '@/components/School';
import School2 from '@/components/School2'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce,
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/school2',
      component: School2
    }
  ]
})
