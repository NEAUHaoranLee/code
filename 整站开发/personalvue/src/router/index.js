import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Skills from '@/components/Skills';
import Introduce from '@/components/Introduce';
import School from '@/components/School';
import Production from '@/components/Production'
import Contect from '@/components/Contect';

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
      path: '/production',
      name: 'Production',
      component: Production
    }, {
      path: '/contect',
      component: Contect,
      name: 'Contect'
    }
  ]
})
