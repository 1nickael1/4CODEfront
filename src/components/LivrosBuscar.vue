<template>
<div>
  <form>
    <input name="titulo" id="busca" type="text" v-model="busca" placeholder="Buscar:">
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarLivros">
  </form>
  <div v-if="busca">
  </div>
  </div>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      busca: ""
    };
  },
  methods: {
    buscarLivros() {
      api.get("/livros/search").then(response => {
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
</style>
