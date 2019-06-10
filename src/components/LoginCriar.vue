<template>
  <section>
    <h2>Crie Sua Conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">Criar Conta</button>
      <UsuarioForm v-else>
        <button class="btn btn-form" @click.prevent="criarUsuario">Criar Usuario</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";

export default {
  name: "LoginCriar",
  components: {
    UsuarioForm
  },
  data() {
    return {
      criar: false
      //dados: ""
    };
  },
  methods: {
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store
          .dispatch("logarUsuario", this.$store.state.usuario)
          .then(response => {
            this.dados = response.data,
            this.id = response.data.user._id;
          });

        this.$router.push("/usuario");
      } catch (err) {}
      //this.$store.dispatch("salvarUsuario", this.$store.state.dados) = this.dados;
    }
  },
  computed: {
    dados: {
      get() {
        return this.$store.state.dados;
      },
      set(value) {
        this.$store.commit("SALVAR_USUARIO", { dados: value });
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
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>
