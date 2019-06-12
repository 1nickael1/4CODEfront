import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Livro from "./views/Livro.vue";
import Login from "./views/Login.vue";
import Usuario from "./views/usuario/Usuario.vue";
import UsuarioLivros from "./views/usuario/UsuarioLivros.vue";
import UsuarioEditar from "./views/usuario/UsuarioEditar.vue";
import Admin from "./views/admin/Admin.vue";
import LivroCriar from "./views/admin/LivroCriar.vue";
import LivroRemover from "./views/admin/LivroRemover.vue";
import LivroEditar from "./views/admin/LivroEditar.vue";
import LivroEdit from "./views/admin/LivroEdit.vue";
import Usuarios from "./views/admin/Usuarios.vue";


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
      component: Usuario,
      children: [
        {
          path: "",
          name: "usuario",
          component: UsuarioLivros
        },
        {
          path: "usuario-editar",
          name: "usuario-editar",
          component: UsuarioEditar
        }
      ]
    },
    {
      path: "/admin/user",
      component: Admin,
      children: [
        {
          path: "",
          name: "LivroCriar",
          component: LivroCriar
        },
        {
          path: "livro-remover",
          name: "livro-remover",
          component: LivroRemover
        },
        {
          path: "livro-editar",
          name: "livro-editar",
          component: LivroEditar
        },
        {
          path: "livro-edit/:id",
          name: "livro-edit",
          component: LivroEdit,
          props: true
        },
        {
          path: "usuarios",
          name: "usuarios",
          component: Usuarios
        }
      ]
    },
  ],
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
});
