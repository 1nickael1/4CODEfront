<template>
  <section>
    <div v-if="Livro" class="livro">
      <div class="info">
        <h1 class="titulo">{{ Livro.titulo }}</h1>
        <p class="descricao">{{ Livro.descricao }}</p>
        <div class="ajuste1">
          <LivroAdicionar :idPai="idFilho"/>
          <LivroRemover class="ajuste2" :idPai="idFilho"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import LivroAdicionar from "@/components/LivroAdicionar.vue";
import LivroRemover from "@/components/LivroRemover.vue";

export default {
  name: "Livros",
  props: ["id"],
  data() {
    return {
      Livro: null,
      idFilho: this.id,
      idUsuario: this.$store.state.usuario.id,
      idLivro: this.id
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
  },
  components: {
    LivroAdicionar,
    LivroRemover
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

.ajuste1 {
  display: flex;
}

.ajuste2 {
  margin-left: 20px;
}
</style>
