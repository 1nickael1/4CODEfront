<template>
    <section class="criar">
        <h1>Criar</h1>
        <div class="btn" v-if="status">
            {{ status }}
        </div>
        <form>
            <label for="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" v-model="TituloLivro">
            <label for="descricao">Descrição</label>
            <textarea type="text" name="descricao" id="descricao" v-model="DescricaoLivro"></textarea>
            <label for="paginas">Número de Páginas</label>
            <input type="number" name="paginas" id="paginas" v-model="PaginasLivro">
            <button class="btn" @click.prevent="criar()">Criar Livro</button>
        </form>
        
    </section>
</template>

<script scoped>
import { api } from "@/services.js";

export default {
    name: "CriarLivro",
    data() {
        return {
            TituloLivro: "",
            DescricaoLivro: "",
            PaginasLivro: "",
            erro: "",
            status: ""
        }
    },
    methods: {
        async criar() {
            try {
                api.post("/livros/create", {
                    titulo: `${this.TituloLivro}`,
                    descricao: `${this.DescricaoLivro}`,
                    paginas: `${this.PaginasLivro}`
                }).then(() => {
                    this.status = "Livro adicionado com sucesso!"

                })
            } catch (err) {
                this.erro = err
            }
        }
    }

}
</script>

<style scoped>
.criar {
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
