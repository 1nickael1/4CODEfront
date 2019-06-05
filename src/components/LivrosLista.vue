<template>
  <section class="livros-container">
    <div v-for="livro in Livros" :key="livro._id">
      <h2 class="titulo">{{ livro.titulo }}</h2>
      <h2>{{ livro.descricao }}</h2>
      <h2>{{ livro.paginas }}</h2>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      Livros: null
    };
  },
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$router.query) {
        queryString += `&${key}=${this.$router.query[key]}`;
      }
      return this.$router.query;
    }
  },
  methods: {
    getLivros() {
      api.get("/livros").then(response => {
        this.Livros = response.data;
      });
    }
  },
  created() {
    this.getLivros();
  }
};
</script>

<style>
</style>
