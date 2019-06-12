<template>
  <section class="editar">
    <h1>Editar Usuário</h1>
    <div>
      <div class="btn" v-if="status">{{ status }}</div>
      <form>
        <label for="nome">Email</label>
        <input type="email" name="email" id="email" v-model="emailUsuario">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="senha">
        <button class="btn" @click.prevent="editar()">Editar Usuário</button>
      </form>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js"

export default {
  name: "usuario-editar",
  data() {
    return {
      idUsuario: this.$store.state.usuario.id,
      emailUsuario: this.$store.state.usuario.email,
      senha: "",
      status: ""
    };
  },
  methods: {
      async editar() {
          try {
              api.post(`/users/update/${this.idUsuario}`, {
                  email: this.emailUsuario,
                  password: this.senha
              }).then(() => {
                  this.$store.dispatch("deslogarUsuario");
                  this.$router.push("/login");

              })
          } catch (err) {
              this.status = err
          }
      }
  },
  computed: {},
  created() {}
};
</script>

<style>
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
