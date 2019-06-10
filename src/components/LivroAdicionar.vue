<template>
  <section>
    <button class="btn" @click.prevent="adicionar">Adicionar</button>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
    name: 'LivroAdicionar',
    props: ["idPai"],
    data() {
        return {
            idUsuario: this.$store.state.usuario.id,
            idLivro: this.idPai
        }
    },
    methods: {
        adicionar() {
            api.post(`/livros/add/${this.idUsuario}`, {id: `${this.idLivro}`}
            )
        }
    }
};
</script>

<style>
</style>
