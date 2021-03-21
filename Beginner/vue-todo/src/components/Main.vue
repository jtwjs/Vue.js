<template>
  <main class="main">
    <Todo-input v-on:todo="addTodo"></Todo-input>
    <Todo-list v-bind:list="todoList" v-on:delete="deleteTodo"></Todo-list>
  </main>
</template>

<script>
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default {
  name: 'AppMain',
  data: () => {
      return {
        todoList: [],
      }
    },
  components: {
    TodoInput,
    TodoList,
  },
  methods: {
    addTodo: function(todo) {
      this.todoList.push({id: this.todoList.length, text: todo});
    },
    deleteTodo: function(idx) {
      this.todoList = this.todoList.filter(todo => todo.id !== idx)
    }
  }
}
</script>

<style scoped>
  .main {
    display: grid;   
    grid-template-columns: repeat(auto-fit, 50%);    
    width: 100%;
    height: calc(100vh - 100px);
    padding: 10px;
  }

  @media screen and (max-width: 720px) {
    .main {
      grid-template-columns: repeat(auto-fit, 100%);    
      grid-template-rows: 50%;
    }
  }
</style>