import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 0, text: "Real-Time", icon: "mdi-alien-outline", done: false },
      { id: 1, text: "Audience", icon: "mdi-account", done: false },
      { id: 2, text: "Conversions", icon: "mdi-flag", done: false },
    ],
    archives: []
  },
  mutations: {
    addTodo(state, text) {
      const lastToDoId = state.todos[state.todos.length - 1]?.id
      const todo = {
        _id: (lastToDoId !== undefined) ? lastToDoId + 1 : 0,
        text: text,
        icon: "mdi-alien-outline"
      }
      state.todos.push(todo)
    },
    setDoneState(state, { id, done }) {
      state.todos.find(t => t.id === id).done = done
    },
    archiveDones(state) {
      state.archives = state.todos.filter(t => t.done)
      state.todos = state.todos.filter(t => !t.done)
    },
  },
  actions: {
    addTodo({ commit }, text) {
      commit('addTodo', text)
    },
    setDoneState({ commit }, payload) {
      commit('setDoneState', payload)
    },
    archiveDones({ commit }) {
      commit('archiveDones')
    }
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(t => t.done)
    },
    notDoneTodos(state) {
      return state.todos.filter(t => !t.done)
    }
  }
});
