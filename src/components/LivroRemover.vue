<template>
  <section>
    <button class="btn" @click.prevent="remover">Remover</button>
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
      idLivro: idPai,
      resultado: idLivro
    };
  },
  methods: {
    async remover() {
        try {
            api.delete(`/livros/remove/${this.idUsuario}`, {
              data: { id: resultado }
            });

        } catch (err) {
            console.log(err)
        }
    }
  }
};
</script>

<style>
</style>
