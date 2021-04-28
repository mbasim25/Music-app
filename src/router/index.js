import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from "../views/Layout.vue";
import search from "../components/Search.vue";
import favs from "../components/Favs.vue";
import foru from "../components/Foru.vue";



const routes = [
  {
    path: '/',
    redirect: '/for-you',
    name: 'LayOut',
    component: LayOut,
    children:[
      {path: 'search',
       component: search},
      {path: 'favs',
       component: favs},
      {path: 'for-you',
       component: foru},
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
