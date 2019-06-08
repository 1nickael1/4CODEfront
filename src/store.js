import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js"

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: "",
      email: "",
      password: "",
      livros: {}
    },
    dados: {},
  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload
    },
    UPDATE_USUARIO(state, payload){
      state.usuario = Object.assign({}, state.usuario, payload)
    },
    SALVAR_USUARIO(state, payload){
      state.dados = (state.dados, payload)
    },
    UPDATE_ID(state, payload){
      state.usuario.id = (state.usuario.id, payload)
    }
  },
  actions: {
    getUsuarioLivros(context) {
      api.get(`/users/livros/${context.state.usuario.id}`)
    },
    logarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO");
      context.commit("UPDATE_LOGIN", true);
      return api.post(`/users/auth`, payload)
    },
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO")
      return api.post('/users/create', payload)
    },
    salvarUsuario(context, payload) {
      context.commit("SALVAR_USUARIO"),
      context.commit("UPDATE_ID")
      return payload
    },
    deslogarUsuario(context){
      context.commit("UPDATE_USUARIO", {
        id: "",
        email: "",
        password: ""
      });

      context.commit("SALVAR_USUARIO", {
        dados: {}
      });

      context.commit("UPDATE_LOGIN", false);
    },
    livros(){

    }
  }
});
