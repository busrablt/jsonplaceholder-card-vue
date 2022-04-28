import axios from "axios";

export default class TodosClient {
  constructor() {
    this.http = axios.create({ baseURL: process.env.VUE_APP_BASE_URL });
  }
  async getTodos() {
    try {
      const response = await this.http.get("/todos");
      return response.data;
    } catch (error) {
      console.error("TodosClient error: ", error);
      return "client error";
    }
  }
}
