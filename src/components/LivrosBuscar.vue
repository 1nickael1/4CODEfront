<template>
  <form>
    <input name="busca" id="busca" type="text" v-model="busca">
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarLivros">
    {{ busca }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: ""
    };
  },
  //pesquisar sobra busca com mongoose ou mongodb
  methods: {
    buscarLivros() {
      this.$router.push({ query: { q: this.busca } });
    }
  }
};
</script>

<style>
</style>
