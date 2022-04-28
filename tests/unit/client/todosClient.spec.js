import moxios from "moxios";
import { TodoList } from "../../mocks/TodoList";
import TodosClient from "../../../src/client/todosClient";

describe("TodosClient test with moxios", function () {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  test("When getTodos called then should return todos list", async () => {
    const expectedResponse = TodoList;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedResponse });
    });
    const todosClient = new TodosClient();
    const actualResponse = await todosClient.getTodos();

    expect(actualResponse).toEqual(expectedResponse);
  });

  test("Given status code is not 200 when getTodos called then should return client error", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500, response: "internal server error" });
    });
    const todosClient = new TodosClient();
    const actualResponse = await todosClient.getTodos();

    expect(actualResponse).toEqual("client error");
  });
});
