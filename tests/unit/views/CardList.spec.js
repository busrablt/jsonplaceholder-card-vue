import { shallowMount, createLocalVue } from "@vue/test-utils";
import CardList from "@/views/CardList";
import { TodoList } from "../../mocks/TodoList";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const todo = {
  actions: {
    getTodos: jest.fn(() => Promise.resolve()),
  },
  getters: {
    getTodoList: () => TodoList,
  },
  namespaced: true,
};
const store = new Vuex.Store({
  modules: { todo },
});
describe("TodoCard", () => {
  const wrapper = shallowMount(CardList, {
    localVue,
    store,
  });
  test("Shoud be render CardList", () => {
    expect(wrapper.find("#card-list").exists()).toBe(true);
  });
  test("TodoCard components count should be equal to length of TodoList", () => {
    expect(wrapper.findAllComponents({ name: "TodoCard" }).length).toEqual(
      TodoList.length
    );
  });
});
