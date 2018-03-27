import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movies/Movie'
import Music from '@/components/musics/Music'
import Book from '@/components/books/Book'
import Picture from '@/components/pictures/Picture'
import App from '@/App'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/movie',
        name: 'HelloWorld',
        component: Movie
    }, {
        path: '/music',
        component: Music
    }, {
        path: '/book',
        component: Book
    }, {
        path: '/picture',
        component: Picture
    }, {
        path: '/',
        component: App
    }]
})