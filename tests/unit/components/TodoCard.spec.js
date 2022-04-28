import { shallowMount } from "@vue/test-utils";
import TodoCard from "@/components/TodoCard";

describe("TodoCard", () => {
  const wrapper = shallowMount(TodoCard, {
    propsData: {
      id: 1,
      title: "todo card title",
      completed: false,
    },
  });
  test("Should be render TodoCard", () => {
    expect(wrapper.find("#todo-card").exists()).toBe(true);
  });
  test("The span tag should be equal to propsData's id", () => {
    expect(wrapper.find("span").text()).toMatch("1");
  });
  test("The p tag should be equal to propsData's title", () => {
    expect(wrapper.find("p").text()).toMatch("todo card title");
  });
  test("When card has been clicked then should render div with completed false", async () => {
    const card = wrapper.find("#todo-card");
    await card.trigger("click");
    expect(wrapper.find(".completed").text()).toEqual(
      expect.stringContaining("Completed: false")
    );
  });
  test("The span tag should not render when id is null", async () => {
    await wrapper.setProps({
      id: null,
    });
    expect(wrapper.find("#todo-card").exists()).toBe(false);
  });
});
