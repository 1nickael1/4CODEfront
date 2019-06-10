<template>
  <section class="livros-container">
    <transition mode="out-in">
    <div v-if="Livros" class="livros" key="livros">
      <div class="livro" v-for="livro in Livros" :key="livro._id">
        <router-link :to='{name: "livro", params: {id: livro._id}}'>
          <h2 class="titulo">{{ livro.titulo }}</h2>
          <p class="descricao">{{ livro.descricao }}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="Livros && Livros.lenght == 0" key="sem-resultado">
      <p class="sem-resultados">Busca sem resultados.</p>
    </div>
    <div v-else>
      <PaginaCarregando key="carregando" />
    </div>
    </transition>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      Livros: null,
      id: this.$store.state.usuario.id
    };
  },
  computed: {
    url() {
      //const query = serialize(this.$route.query);
      return `/users/livros/${this.id}`;
    }
  },
  methods: {
    getLivros() {
      this.Livros = null;
      window.setTimeout(() => {
        api.get(this.url).then(response => {
          this.Livros = response.data;
        });
      }, 500);
    }
  },
  watch: {
    url() {
      this.getLivros();
    }
  },
  created() {
    this.getLivros();
  }
};
</script>

<style scoped>
.livros-container {
  max-width: 1000px;
  margin: 0 auto;
}

.livros {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.livro {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.livro:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.titulo {
  margin-bottom: 10px;
}

.descricao {
  font-weight: lighter;
  margin-bottom: 10px;
}

.sem-resultados {
  text-align: center;
}
</style>
