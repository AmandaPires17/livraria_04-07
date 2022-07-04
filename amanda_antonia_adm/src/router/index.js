import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosView from "../views/LivrosView.vue";
import AutorView from "../views/AutorView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import EditoraView from "../views/EditoraView.vue";
import AdmView from "../views/AdmView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/Autores",
      name: "Autores",
      component: AutorView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditoraView,
    },
    {
      path: "/adm",
      name: "ADM",
      component: AdmView,
    },
  ],
});

export default router;
