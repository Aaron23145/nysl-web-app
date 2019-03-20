<template>
  <div class="loading">
    <div class="loading__icon-div">
      <i class="loading__icon fas fa-circle-notch" />
    </div>
    <div class="loading__text-div">
      Loading...<br>Please, wait.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  text-align: center;
  color: var(--main-blue);
}

.loading__icon{
  animation: circle-spin infinite 2s linear;
  font-size: 5rem;
}

.loading__icon-div {
  padding-bottom: 30px;
}

@keyframes circle-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
