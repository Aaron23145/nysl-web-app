<template>
  <div class="game-detail">
    <div>
      <div class="game-detail__small-text">
        <span v-if="from">Next {{ from | capitalize }} Game</span>
      </div>
      <div class="game-detail__big-text">
        {{ formatTeams(game.teams) }}
      </div>
    </div>
    <div class="game-detail__location-details">
      <div class="game-detail__small-text">
        Location
      </div>
      <div class="game-detail__big-text">
        {{ game.location }}
      </div>
    </div>
    <LocationMap :location="game.location" />
    <div>
      <div class="game-detail__big-text">
        {{ formatMonth(game.date.split('/')[0]) }}
      </div>
      <div class="game-detail__big-text">
        {{ formatDay(game.date.split('/')[1]) }}
      </div>
      <div class="game-detail__small-text">
        at
      </div>
      <div class="game-detail__big-text">
        {{ game.time.toUpperCase() }}
      </div>
    </div>
    <router-link
      v-if="nextView"
      :to="nextView"
      tag="button"
      class="button game-detail__button"
    >
      <slot>More Games</slot>
    </router-link>
  </div>
</template>

<script>
import LocationMap from './LocationMap.vue';
import { formatMonth, formatDay, formatTeams } from '../utils';

export default {
  name: 'GameDetail',
  components: {
    LocationMap,
  },
  props: {
    game: {
      type: Object,
      required: true,
    },
    from: {
      type: String,
      default: null,
    },
    nextView: {
      type: Object,
      default: null,
    },
  },
  methods: {
    formatMonth,
    formatDay,
    formatTeams,
  },
};
</script>

<style>
.game-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 100%;
}

.game-detail > div {
  margin-bottom: 10px;
}

.game-detail__small-text {
  font-size: 1.2rem;
}

.game-detail__big-text {
  font-size: 1.5rem;
}

.game-detail__button {
  margin: 5px auto;
}

@media (orientation: landscape) {
  .game-detail {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .game-detail > div {
    width: 45vw;
    margin-bottom: 5px;
  }

  .game-detail__location-details {
    order: -1;
  }

  .game-detail__small-text {
    font-size: 1rem;
  }

  .game-detail__big-text {
    font-size: 1.3rem;
  }
}
</style>
