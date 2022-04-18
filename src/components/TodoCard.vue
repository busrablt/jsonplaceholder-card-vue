<template>
  <div id="todo-card" v-if="id" class="bg-light-purple p-3 rounded shadow h-28">
    <span class="font-bebas text-xl">{{ id }}</span>
    <p class="libre text-xl">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoCard",
  props: {
    id: Number,
    title: String,
  },
};
</script>

<style lang="scss" scoped></style>
