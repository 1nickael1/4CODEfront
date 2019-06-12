<template>
    <section>
        <h1>Usuários</h1>
        <div class="btn" v-if="status">
            <p>{{status}}</p>
        </div>
        <div v-for="users in dados" :key="users._id" class="colunas">
            <TR>
            <TH><p>{{users.email}}</p></TH>
            <TH><button class="botao" @click.prevent="deletar(users._id)">❌</button></TH>
            </TR>
        </div>
    </section>
</template>

<script>
import { api } from '@/services.js';

export default {
    name: "usuarios",
    data() {
        return {
            dados: "",
            status: ""
        }
    },
    methods: {
        getUsuarios() {
            api.get('/users').then((response) => {
                this.dados = response.data
            })
        },
        async deletar(id) {
            try {
                api.get(`/users/delete/${id}`).then(() => {
                    this.getUsuarios()
                })
            } catch (err) {
                this.status = err
            }
        }
    },
    created() {
        this.getUsuarios()
    }
}
</script>

<style>

</style>
