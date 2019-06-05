<template>
  <section>
    <h1>📚 Livros</h1>
    <LivrosBuscar/>
    <LivrosLista/>
  </section>
</template>

<script>
import LivrosBuscar from "@/components/LivrosBuscar.vue";
import LivrosLista from "@/components/LivrosLista.vue";

export default {
  name: "home",
  components: {
    LivrosBuscar,
    LivrosLista
  }
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>

