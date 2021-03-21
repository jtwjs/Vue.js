<template>
  <article class="todo">
    <h2 class="title">
      오늘 할일...
    </h2>
    <ul class="todo-list">
      <Todo-item v-for="item in list" 
                 v-bind:key="item.id"
                 v-bind:item="item"
                 v-on:delete="deleteTodo"
                 >
      </Todo-item>
    </ul>
  </article>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: ['list'],
  methods: {
    deleteTodo: function(idx) {
      this.$emit('delete', idx);
    }
  }
}
</script>

<style scoped>
  .todo {
    width: 100%;
    height: 100%;
  }
</style>