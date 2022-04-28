<template>
  <div id="card-list" class="grid-item p-6">
    <TodoCard v-for="todo in getTodoList" :key="todo.id" v-bind="todo" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TodoCard from "../components/TodoCard.vue";
export default {
  name: "CardList",
  components: { TodoCard },
  mounted() {
    this.getTodos();
  },
  computed: {
    ...mapGetters({
      getTodoList: "todo/getTodoList",
    }),
  },
  methods: {
    ...mapActions({
      getTodos: "todo/getTodos",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
