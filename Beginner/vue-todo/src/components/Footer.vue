<template>
  <footer class="footer">
    <div class="container">
      <span class="title">
        ToDo: <strong>Vue</strong>
      </span>
      <span class="create-date">
        create date: 2021-03-21
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 50px;
    padding: 5px;
    background-color: #ffc82c;
  }
  
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-weight: 600;
    color: #fff;
  }

  .title strong {
    color: #009888;
  }
  
  .create-date {
    position: absolute;
    right: 10px;
    font-size: 12px;
  }

  @media screen and (max-width: 720px) {
    .create-date {
      display: none;
    }
  }
</style>