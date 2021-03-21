<template>
  <form v-on:submit.prevent="submitForm" class="form">
    <h2 class="title">
      오늘 뭐할거니? 😆
    </h2>
    <input  class="input" type="text" v-model="todo" />
    <button class="button" tpye="submit">
      등록ㅋ
    </button>
  </form>
</template>

<script>
export default {
  name: 'TodoInput',
  data: () => {
    return {
      todo: '',
    }
  },
  methods: {
    submitForm: function() {
      if(this.todo) {
        this.$emit('todo',this.todo);
        this.todo = '';
      }
    }
  }
}
</script>

<style>
 .form {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 100%;
 }

 .form .title {
   font-size: 20px;
   margin-bottom: 20px;
 }

 .input {
   width: 100%;
   margin-bottom: 10px;
   border-radius: 5px;
   font-size: 20px;
 }

.button {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  font-weight: 600;
  color: #fff;
  background-color: #009988;
  cursor: pointer;
}
 
</style>