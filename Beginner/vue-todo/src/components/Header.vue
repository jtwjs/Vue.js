<template>
  <header class="header">
    <div class="container">
      <p class="message">
        vue 정복하자... 😫
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 50px;
    padding: 5px;
    background-color: #0066ff;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .message {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
  }
</style>

