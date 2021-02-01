import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SortingVisualiser from "../views/SortingVisualiser.vue";
import GeneticAlgorithm from "../views/GeneticAlgorithm.vue";
import Selfdriving from "../views/Selfdriving.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/visualiser",
    name: "Sorting Visualiser",
    component: SortingVisualiser,
  },
  {
    path: "/genalgo",
    name: "Genetic Algorithm",
    component: GeneticAlgorithm,
  },
  {
    path: "/selfdriving",
    name: "Selfdriving Car",
    component: Selfdriving,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
