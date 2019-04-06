<template>
  <div class="home">
    <router-link
      tag="button"
      :to="{ name: 'teamList' }"
      class="button"
    >
      Select a team
    </router-link>
    <router-link
      tag="button"
      :to="{ name: 'dayList' }"
      class="button"
    >
      Select a day
    </router-link>
    <router-link
      tag="button"
      :to="{ name: 'locationList' }"
      class="button"
    >
      Select a location
    </router-link>
    <router-link
      tag="button"
      :to="{ name: 'chat' }"
      class="button"
    >
      Access chat
    </router-link>
    <router-link
      tag="button"
      :to="{ name: 'help' }"
      class="button button--inline home__help-button"
    >
      ?
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
.home {
  text-align: right;
}

.home > .button {
  margin: 5px auto;
}

.home__help-button {
  position: absolute;
  bottom: 20px;
  right: 10%;
  display: inline-block;
  width: initial;
  height: initial;
  padding: 10px 20px;
}

@media (orientation: landscape) {
  .home {
    display: flex;
    flex-wrap: wrap;
  }

  .home__help-button {
    right: 2.5%;
  }
}
</style>
