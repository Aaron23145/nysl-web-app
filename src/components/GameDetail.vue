<template>
  <div class="game-detail">
    <div>
      <div class="game-detail__small-text">
        <span v-if="!from">&nbsp;</span>
        <span v-else>Next {{ from | capitalize }} Game</span>
      </div>
      <div class="game-detail__big-text">
        {{ formatTeams(game.teams) }}
      </div>
    </div>
    <div>
      <div class="game-detail__small-text">
        Location
      </div>
      <div class="game-detail__big-text">
        {{ game.location }}
      </div>
      <LocationMap :location="game.location" />
    </div>
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
      class="button"
    >
      <slot>More Games</slot>
    </router-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
import LocationMap from './LocationMap'
import { formatMonth, formatDay, formatTeams } from '../utils.js'

export default {
  name: 'GameDetail',
  components: {
    LocationMap
  },
  props: {
    game: {
      type: Object,
      required: true
    },
    from: {
      type: String,
      default: null
    },
    nextView: {
      type: Object,
      default: null
    }
  },
  methods: {
    formatMonth,
    formatDay,
    formatTeams
  }
}
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
</style>
