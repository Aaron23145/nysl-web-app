<template>
  <div class="help">
    <h3 class="title">
      Help
    </h3>
    <h4 class="section-title">
      How to query games information?
    </h4>
    <p class="paragraph">
      To query information about NYSL games you can use one of the three available modes:
      <ul class="list">
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
            <strong>Selecting a location</strong>: allows you to search for game information by
            selecting the location. First you will get information about the next game that
            will ocurr in that location. By pressing "more games", you'll be able to view
            the rest of the games that will ocurr in the same place this season.
          </span>
        </li>
      </ul>
    </p>
    <h4 class="section-title">
      How to use the chat?
    </h4>
    <p class="paragraph">
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
