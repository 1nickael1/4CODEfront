<template>
  <section>
    <div class="btn" v-if="status">
      <p>{{status}}</p>
    </div>
    <button class="btn" @click.prevent="remover">Remover</button>
    <!-- <p>ID usuario: {{idUsuario}}</p>
    <p>ID livro: {{idLivro}}</p> -->
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "LivroRemover",
  props: ["idPai"],
  data() {
    return {
      idUsuario: this.$store.state.usuario.id,
      idLivro: this.idPai,
      status: ""
    };
  },
  methods: {
    async remover() {
        try {
            api.get(`/livros/remove/${this.idUsuario}/remove/${this.idLivro}`, {
              data: { id: this.idLivro }
            });

            this.$router.push("/")
        } catch (err) {
            this.status = err
        }
    }
  }
};
</script>

<style>
</style>
