<template>
  <div class="the-error">
    <div class="the-error__icon-div">
      <i class="the-error__icon fas fa-times" />
    </div>
    <div class="the-error__text-div">
      Error!<br>Couldn't connect to the server.
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheError'
}
</script>

<style>
.the-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--main-pink);
  font-size: 1.5rem;
  text-align: center;
}

.the-error__icon {
  font-size: 5rem;
}

.the-error__icon-div {
  padding-bottom: 30px;
}
</style>
