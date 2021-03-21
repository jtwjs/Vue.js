<template>
  <li class="todo-item">
        {{ item.text }}
      <button class="delete" v-on:click="deleteTodo">삭제요 ㅋ</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
    deleteTodo: function() {
      this.$emit('delete',this.item.id);
    }
  }
}
</script>

<style scoped>
 .delete {
   cursor: pointer;
   color: #fff;
   background-color: #222;
 }

</style>