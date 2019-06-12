<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'usuarios'}">Usuários</router-link>
        </li>
        <li>
          <router-link :to="{name: 'LivroCriar'}">Criar Livros</router-link>
        </li>
        <li>
          <router-link :to="{name: 'livro-remover'}">Remover Livro</router-link>
        </li>
        <li>
        <router-link :to="{name: 'livro-editar'}">Editar Livro</router-link>
        </li>
        <li>
          <button @click="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Usuario",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  },
  computed: {
    dados: {
      get() {
        return this.$store.state.dados;
      }
    }
  }
};
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 160px) 1fr;
  max-width: 1000px;
  margin: 40px auto;
  grid-gap: 40px;
  padding: 20px;
}

@media screen and (max-width: 600px) {
  .usuario {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav a,
.sidenav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #fff;
}

.sidenav button {
  padding: 10px;
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: sans-serif, Helvetica, Arial;
  cursor: pointer;
}
</style>