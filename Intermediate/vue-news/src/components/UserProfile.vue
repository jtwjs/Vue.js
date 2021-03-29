<template>
  <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <!-- <div>username : {{ info.id }}</div> -->
        <slot name="username">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <div class="time">
          <slot name="time">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
        </div> 
        <div>
          <slot name="karma">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 0.5rem;
  font-size: 1rem;
}
.fas {
  font-size: 60px;
}
</style>