import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Livro from "./views/Livro.vue";
import Login from "./views/Login.vue";
import Usuario from "./views/usuario/Usuario.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/livros/:id",
      name: "livro",
      component: Livro,
      props: true
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/usuario",
      name: "usuario",
      component: Usuario,
    },
  ],
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
});
