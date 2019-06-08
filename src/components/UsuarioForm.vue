<template>
        <form>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="email">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" v-model="password">
            <div class="button">
                <slot></slot>
            </div>
        </form>
</template>

<script>
export default {
    name: "UsuarioForm",
    computed: {
        email: {
            get() {
                return this.$store.state.usuario.email
            },
            set(value) {
                this.$store.commit("UPDATE_USUARIO", {email: value})
            }
        },
        password: {
            get() {
                return this.$store.state.usuario.password
            },
            set(value) {
                this.$store.commit("UPDATE_USUARIO", {password: value})
            }
        }
    }

}
</script>

<style scoped>
form {
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;
}

.button {
    grid-column: 2;
    margin-top: 10px;
}
</style>
