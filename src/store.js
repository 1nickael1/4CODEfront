import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: "",
      email: "",
      password: ""
    },
    dados: {}
  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload
    },
    UPDATE_USUARIO(state, payload){
      state.usuario = payload
    }
  },
  actions: {
    getUsuario() {
      api.post(`/users/auth`).then(response => {
        //context.commit("UPDATE_USUARIO", response.data);
        //context.commit("UPDATE_LOGIN", true);
        this.dados = response.data;
      })
    }
  }
});
