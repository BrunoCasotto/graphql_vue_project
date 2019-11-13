<template>
  <div>
    <div class="row">
      <div class="col-5">
        <div class="header">
          <h3 class="title">Times de basquete</h3>
        </div>
        <input
          v-model="searchTerm"
          @input="fetchTeams(searchTerm)"
          class="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        >

        <TeamList
          :teamList="teamList"
          :activeTeam="selectedTeam"
          :setActiveTeam="(team) => setActiveTeam(team)"
        />
      </div>

      <div class="col-1">
        <img
          class="center-image"
          src="./../assets/logo.png"
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
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import TeamList from './../components/teamList'
import TeamDetails from './../components/teamDetails'

export default {
  data() {
    return {
      selectedTeam: null,
      teamList: [],
      searchTerm: ''
    }
  },
  name: 'app',
  components: {
    TeamList,
    TeamDetails
  },
  methods: {
    async fetchTeams(searchTerm) {
      this.selectedTeam = null
      if(searchTerm === '') {
        this.teamList = []
        return
      }

      const { data } = await axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            query ($searchTerm: String) {
              teams: teams(name: $searchTerm){
                teamId
                abbreviation
                teamName
                simpleName
                location
              }
            }
          `,
          variables: {
						searchTerm
					}
        }
      })

      this.teamList = data.data.teams
    },
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
