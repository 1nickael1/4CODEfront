<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="loginEmail">
      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="loginPassword">
      <button class="btn" @click.prevent="logar()">Logar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>
    <LoginCriar/>
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";

export default {
  name: "Login",
  data() {
    return {
    };
  },
  components: {
    LoginCriar
  },
  methods: {
    async logar() {
      try {
        await this.$store
          .dispatch("logarUsuario", this.$store.state.usuario)
          .then(response => {
            this.dados = response.data,
            this.id = response.data.user._id;
          });
        this.$router.push("/usuario");
      } catch (err) {}
    }
  },
  computed: {
    dados: {
      get() {
        return this.$store.state.dados;
      },
      set(value) {
        this.$store.commit("SALVAR_USUARIO", value);
      }
    },
    loginEmail: {
      get() {
        return this.$store.state.usuario.email;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { email: value });
      }
    },
    loginPassword: {
      get() {
        return this.$store.state.usuario.password;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { password: value });
      }
    },
    id: {
      get(){
        return this.$store.state.usuario.id;
      },
      set(value){
        this.$store.commit("UPDATE_ID", value);
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 500px;
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
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
