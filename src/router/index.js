import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SortingVisualiser from '../views/SortingVisualiser.vue'
import GeneticAlgorithm from '../views/GeneticAlgorithm.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/visualiser',
    name: 'Sorting Visualiser',
    component: SortingVisualiser
  },
  {
    path:'/genalgo',
    name:"Genetic Algorithm",
    component:GeneticAlgorithm
  }

]

const router = new VueRouter({
  routes
})

export default router
