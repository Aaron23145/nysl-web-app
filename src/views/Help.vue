<template>
  <div class="help">
    <h3 class="help__title">
      Help
    </h3>
    <h4 class="help__section-title">
      How to query games information?
    </h4>
    <p class="help__paragraph">
      To query information about NYSL games you can use one of the three available modes:
      <ul class="help__list">
        <li>
          <span>
            <strong>Selecting a team</strong>: allows you to search for game information by
            selecting the team name. First you will get information about the next game the
            team will have. By pressing "more games", you'll be able to view the rest of the
            games that this team will play this season.
          </span>
        </li>
        <li>
          <span>
            <strong>Selecting a day</strong>: allows you to search for game information by
            selecting any day. Then you'll be asked for which game if that day has more than
            one game.
          </span>
        </li>
        <li>
          <span>
            <strong>Select a location</strong>: allows you to search for game information by
            selecting the location. First you will get information about the next game that
            will ocurr in that location. By pressing "more games", you'll be able to view
            the rest of the games that will ocurr in the same place this season.
          </span>
        </li>
      </ul>
    </p>
    <h4 class="help__section-title">
      How to use the chat?
    </h4>
    <p class="help__paragraph">
      WIP
    </p>
  </div>
</template>

<script>
import { breadcrumbView } from '../mixins';

export default {
  name: 'Help',
  mixins: [breadcrumbView],
};
</script>

<style>
.help__title,
.help__paragraph,
.help__list {
  margin: 5px 0;
}

.help__title {
  text-align: center;
  font-size: 1.5rem;
}

.help__section-title {
  margin: 25px 0;
  font-size: 1.25rem;
}

.help__list {
  padding-left: 15px;
  list-style-type: square;
  color: var(--main-blue);
}

.help__list > li {
  margin-bottom: 5px;
}

.help__list > li > span {
  color: black;
}
</style>
