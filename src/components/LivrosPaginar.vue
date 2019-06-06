<template>
  <p>Páginas {{ LivrosTotal }} {{ LivrosPorPagina }}</p>
</template>

<script>
export default {
  props: {
    LivrosPorPagina: {
      type: Number,
      default: 1
    },
    LivrosTotal: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style>
</style>
