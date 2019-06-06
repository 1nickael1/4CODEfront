<template>
  <section>
    <div v-if="Livro" class="livro">
      <div class="info">
        <h1 class="titulo">{{ Livro.titulo }}</h1>
        <p class="descricao">{{ Livro.descricao }}</p>
        <p>Páginas: {{ Livro.paginas }}</p>
        <button class="btn">Adicionar</button>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Livros",
  props: ["id"],
  data() {
    return {
      Livro: null
    };
  },
  methods: {
    getLivro() {
      api.get(`livros/livro/${this.id}`).then(response => {
        this.Livro = response.data;
      });
    }
  },
  created() {
    this.getLivro();
  }
};
</script>

<style scoped>
.livro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.info {
}

.titulo {
  margin-bottom: 40px;
}
.descricao {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
