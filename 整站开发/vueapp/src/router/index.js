import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movies/Movie'
import Music from '@/components/musics/Music'
import Book from '@/components/books/Book'
import Picture from '@/components/pictures/Picture'
import MovieDetail from '@/components/movies/Moviedetail'
import PictureDetails from "@/components/pictures/PictureDetails";

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Movie',
            component: Movie,

        }, {
            path: '/music',
            name: 'Music',
            component: Music,
            beforeEnter(to, from, next) {
                from.name === null ? next('/') : next()
            }
        }, {
            path: '/book',
            name: 'Book',
            component: Book,
            beforeEnter(to, from, next) {
                from.name === null ? next('/') : next()
            }
        }, {
            path: '/picture',
            name: 'Picture',
            component: Picture,
            beforeEnter(to, from, next) {
                from.name === null ? next('/') : next()
            }
        },
        {
            path: '/movieDetail/:movieId',
            name: 'MovieDetail',
            component: MovieDetail,

            beforeEnter(to, from, next) {
                from.name === null ? next('/') : next()
            }
        },
        {
            path: '/picture/picturedetails/:index',
            component: PictureDetails
        }
    ]

})