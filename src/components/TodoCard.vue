<template>
  <div
    id="todo-card"
    v-if="id"
    class="bg-light-purple p-3 rounded shadow-lg h-28 flex flex-col cursor-pointer"
    @click="isClicked = !isClicked"
  >
    <span class="font-bebas text-xl">{{ id }}</span>
    <p class="libre text-xl">{{ title }}</p>
    <div
      v-if="isClicked"
      class="font-bebas px-5 self-end completed text-blue-300"
    >
      Completed: {{ completed }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoCard",
  props: {
    id: Number,
    title: String,
    completed: Boolean,
  },
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
