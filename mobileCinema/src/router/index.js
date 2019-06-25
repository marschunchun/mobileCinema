import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../components/Movie'
import Cinema from '../components/Cinema'
import Mine from '../components/Mine'
import City from '../components/City'
import Search from '../components/Search'
import ComingSoon from '../components/ComingSoon'
import NowPlaying from '../components/NowPlaying'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/movie',
      component:Movie,
      children:[
        {
          path:'city',
          component:City
        },
        {
          path:'nowPlaying',
          component:NowPlaying
        },
        {
          path:'comingSoon',
          component:ComingSoon
        },
        {
          path:'search',
          component:Search
        },
        {
          path:'detail/1/:movieId',
          components:{
            default:NowPlaying,
            detail:Detail
          },
          props:{
            detail:true
          }
        },
        {
          path:'detail/2/:movieId',
          components:{
            default:ComingSoon,
            detail:Detail
          },
          props:{
            detail:true
          }
        },
        {
          path:'/movie',
          redirect:'/movie/nowPlaying'
        },
      ]
    },
    {
      path: '/cinema',
      component:Cinema,
    },
    {
      path: '/mine',
      component:Mine,
    },
    {
      path: '/*',
      redirect:'/movie',
    }
  ]
})
