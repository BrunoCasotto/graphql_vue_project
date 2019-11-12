<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-5">
        <div class="header">
          <h3 class="title">Times de basquete</h3>
        </div>

        <TeamList
          :teamList="teamList"
          :activeTeam="selectedTeam"
          :setActiveTeam="(team) => setActiveTeam(team)"
        />
      </div>

      <div class="col-1">
        <img
          class="center-image"
          src="./assets/logo.png"
          width="100px"
        >
      </div>

      <div
        v-if="selectedTeam"
        class="col-6"
      >
        <div class="header">
          <h3 class="title">Detalhes</h3>
        </div>

        <TeamDetails
          :team="selectedTeam"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import TeamList from './components/teamList'
import TeamDetails from './components/teamDetails'

export default {
  data() {
    return {
      selectedTeam: null,
      teamList: [
        {
          teamId: 1610612737,
          abbreviation: 'ATL',
          teamName: 'Atlanta Hawks',
          simpleName: 'Hawks',
          location: 'Atlanta'
        },
        {
          teamId: 1610612738,
          abbreviation: 'BOS',
          teamName: 'Boston Celtics',
          simpleName: 'Celtics',
          location: 'Boston'
        },
        {
          teamId: 1610612751,
          abbreviation: 'BKN',
          teamName: 'Brooklyn Nets',
          simpleName: 'Nets',
          location: 'Brooklyn'
        },
      ]
    }
  },
  name: 'app',
  components: {
    TeamList,
    TeamDetails
  },
  methods: {
    setActiveTeam(team) {
      this.selectedTeam = team
    }
  }
}
</script>
<style>
  .header {
    padding: 30px 0;
  }
  .center-image {
    margin-top: 100px;
  }
</style>
