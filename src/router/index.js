import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrimeurView from '@/views/PrimeurView.vue'
import ReactiveValueView from '@/views/ReactiveValueView.vue'
import PersonneDetailsView from '@/views/PersonneDetailsView.vue'
import AdresseView from '@/views/AdresseView.vue'
import CalculView from '@/views/CalculView.vue'
import PersonneShowView from '@/views/PersonneShowView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import CompteurView from '@/views/CompteurView.vue'
import AuthView from '@/views/AuthView.vue'


//ATTENTION LORDRE DES ROUTES A DE LIMPORTANCE ICI CEST DEGUEU
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    alias:['/home', '/accueil']
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/primeur',
    name: 'primeur',
    component: PrimeurView
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: ReactiveValueView
  },
  {
    path: '/personne/:id',
    name: 'personne-details',
    component: PersonneDetailsView
  },
  {
    path: '/adresse',
    name: 'adresse',
    component: AdresseView
  },
  {
    path: '/calcul/:op',
    name: 'calcul',
    component: CalculView
  },
  {
    path: '/personne',
    name: 'personne',
    component: PersonneShowView
  },
  {
    path: '/person',
    redirect: '/personne',
  },
  {
    path: '/compteur',
    name: 'compteur',
    component: CompteurView
  },

  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },

  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
