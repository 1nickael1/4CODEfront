<template>
  <section class="editar">
    <h1>Editar</h1>
    <div>
        <!--<p>{{Livro}}</p>
        <p>{{Nome}}</p>
        <p>{{Descricao}}</p>
        <p>{{Paginas}}</p>-->
    </div>
    <div class="btn" v-if="status">
            {{ status }}
        </div>
    <form>
            <label for="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" v-model="Nome">
            <label for="descricao">Descrição</label>
            <textarea type="text" name="descricao" id="descricao" v-model="Descricao"></textarea>
            <label for="paginas">Número de Páginas</label>
            <input type="number" name="paginas" id="paginas" v-model="Paginas">
            <button class="btn" @click.prevent="editar()">Editar Livro</button>
        </form>
  </section>
</template>

<script>
import { api } from "@/services.js"

export default {
  name: "livro-edit",
  props: ["id"],
  data() {
      return {
          Livro: null,
          Nome: "",
          Descricao: "",
          Paginas: "",
          status: ""
      }
  },
  methods: {
      getLivros() {
          this.Livro = null
            api.get(`/livros/livro/${this.id}`).then((response) => {
                this.Livro = response.data,
                this.Nome = this.Livro.titulo,
                this.Descricao = this.Livro.descricao,
                this.Paginas = this.Livro.paginas
            })
      },
      async editar() {
          try {
              api.post(`/livros/update/${this.id}`, {
                    titulo: `${this.Nome}`,
                    descricao: `${this.Descricao}`,
                    paginas: `${this.Paginas}`
                }).then(() => {
                  this.status = "Livro editado com sucesso!"

                })
          } catch (err) {
              this.status = err
          }
      }
  },
  created() {
      this.getLivros();
  }
};
</script>

<style scoped>
.editar {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
  grid-template-columns: 400px;
}
</style>
