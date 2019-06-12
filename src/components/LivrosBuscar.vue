<template>
  <div>
    <form>
      <input name="titulo" id="busca" type="text" v-model="buscar" placeholder="Buscar:">
      <input type="submit" id="lupa" value="titulo" @click.prevent="buscarLivros">
    </form>
    <!-- <p>tentando pesquisar por: {{buscar}}</p> -->
      <section class="livros-container">
    <transition mode="out-in">
        <div v-if="busca" class="livros">
          <div class="livro" v-for="livro in busca" :key="livro._id">
            <router-link :to='{name: "livro", params: {id: livro._id}}'>
              <h2 class="titulo">{{ livro.titulo }}</h2>
            </router-link>
          </div>
        </div>
    </transition>
      </section>
  </div>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      busca: "",
      buscar: ""
    };
  },
  methods: {
    buscarLivros() {
      api
        .post("/livros/search", { titulo: `${this.buscar}` })
        .then(response => {
          this.busca = response.data;
        });
    }
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  transform: scale(1.1);
}

#lupa {
  width: 40px;
  height: 40px;
  background: url("../assets/loupe.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  box-shadow: none;
}

.livros-container {
  max-width: 200px;
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

</style>
