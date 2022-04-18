import TodosClient from "../../client/todosClient";

const state = {
  todos: [],
};

const mutations = {
  SET_TODOS(currentState, value) {
    currentState.todos = value;
  },
};

const actions = {
  async getTodos({ commit }) {
    const todosClient = new TodosClient();
    return new Promise((resolve, reject) => {
      todosClient
        .getTodos()
        .then((todos) => {
          commit("SET_TODOS", todos);
          resolve(todos);
        })
        .catch((err) => reject(err));
    });
  },
};

const getters = {
  getTodoList(currentState) {
    return currentState.todos;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
