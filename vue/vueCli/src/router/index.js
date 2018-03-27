import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test1 from '@/components/test1'
import Test2 from '@/components/test2'
import Test3 from '@/components/test3'
import Testurl from '@/components/testurl'
import Count1 from '@/components/Count'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/test1',
        name: 'Test1',
        component: Test1,
        children: [{
            path: '/test2',
            name: 'Test2',
            component: Test2
        }, {
            path: '/test3',
            name: 'Test3',
            component: Test3
        }, {
            path: '/testurl/:userid(\\d+)/:username',
            name: 'Testurl',
            component: Testurl
        }, {
            path: '/home',
            redirect: '/'
        }, {
            path: '/re/:userid(\\d+)/:username',
            redirect: '/testurl/:userid(\\d+)/:username'
        }, {
            path: '/count',
            name: 'Count',
            component: Count1
        }]
    }]
})