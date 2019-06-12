<template>
  <section class="livros-container">
    <transition mode="out-in">
    <div v-if="Livros" class="livros" key="livros">
      <div class="livro" v-for="livro in Livros" :key="livro._id">
        <router-link :to='{name: "livro", params: {id: livro._id}}'>
          <h2 class="titulo">{{ livro.titulo }}</h2>
          <p class="descricao">{{ 
            livro.descricao.length < 300 ? livro.descricao : livro.descricao.substring(0,300) + "..." 
            }}</p>
          <p>Páginas: {{ livro.paginas }}</p>
        </router-link>
      </div>
      <!--<LivrosPaginar :LivrosTotal="LivrosTotal" :LivrosPorPagina="LivrosPorPagina"/>-->
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
//import { setTimeout } from 'timers';
//import { serialize } from "@/helpers.js";

export default {
  name: "LivrosLista",
  components: {
  },
  data() {
    return {
      Livros: null,
      LivrosPorPagina: 9,
      LivrosTotal: 0
    };
  },
  computed: {
    url() {
      //const query = serialize(this.$route.query);
      return `/livros`;
    }
  },
  methods: {
    getLivros() {
      this.Livros = null;
        api.get(this.url).then(response => {
        this.LivrosTotal = Number(response.data.length);
        this.Livros = response.data;
      });
      
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
  grid-template-columns: repeat(3, 1fr);
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
