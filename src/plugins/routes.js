import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("@/views/Welcome.vue"),
  },
  /*   {
    path: "/characters",
    name: "characters",
    component: () => import("@/views/Characters.vue"),
  },
  {
    path: "/charactersDetail",
    name: "charactersDetail",
    component: () => import("@/views/CharactersDetail.vue"),
  },
  {
    path: "/comics",
    name: "comics",
    component: () => import("@/views/Comics.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () => import("@/views/Comics.vue"),
  }, */
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
