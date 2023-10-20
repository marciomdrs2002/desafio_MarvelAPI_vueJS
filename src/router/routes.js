import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Welcome.vue"),
  },
  {
    path: "/characters",
    name: "Characters",
    component: () => import("../views/Characters.vue"),
  },

  {
    path: "/characters/:id",
    name: "CharacterDetails",
    component: () => import("../views/CharacterDetails.vue"),
  },

  {
    path: "/comics",
    name: "Comics",
    component: () => import("../views/Comics.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
