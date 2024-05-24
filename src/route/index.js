import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home_page/Home.vue";
import EpisodeDetail from "../pages/home_page/EpisodeDetail.vue";
import CharacterDetail from "../pages/home_page/CharacterDetail.vue";
import LocationDetail from "../pages/home_page/LocationDetail.vue";
import Episodes from "../utlities/Episodes.vue";
import Characters from "../utlities/Characters.vue";
import Locations from "../utlities/Locations.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/episodes",
    component: Episodes,
  },
  {
    path: "/episode/:id",
    name: "episode",
    component: EpisodeDetail,
    props: true,
  },
  {
    path: "/characters",
    component: Characters,
  },
  {
    path: "/character/:id",
    name: "character",
    component: CharacterDetail,
    props: true,
  },
  {
    path: "/locations",
    component: Locations,
  },

  {
    path: "/location/:id",
    name: "location",
    component: LocationDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
