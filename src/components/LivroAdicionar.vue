<template>
  <section>
      <div v-if="status" class="btn">
          <p>{{status}}</p>
      </div>
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
            idLivro: this.idPai,
            status: ""
        }
    },
    methods: {
        async adicionar() {
            try {
                api.post(`/livros/add/${this.idUsuario}`, {id: `${this.idLivro}`}).then(() => {
                    this.$router.push("/usuario")

                })
                //this.status = "Livro adicionado com sucesso!"
            } catch (err){
                this.status = err
            }
        }
    }
};
</script>

<style>
</style>
