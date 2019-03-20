<template>
  <div class="error-network">
    <div class="error-network__icon-div">
      <i class="error-network__icon fas fa-times" />
    </div>
    <div class="error-network__text-div">
      Error!<br>Couldn't connect to the server.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorNetwork'
}
</script>

<style>
.error-network {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--main-pink);
  font-size: 1.3rem;
  text-align: center;
}

.error-network__icon {
  font-size: 5rem;
}

.error-network__icon-div {
  padding-bottom: 30px;
}
</style>
