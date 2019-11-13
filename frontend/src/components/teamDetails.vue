<template>
  <div class="card">
    <div class="card-header bg-danger text-white">
      {{ team.teamName }}
    </div>
    <div class="row">
      <div class="col-5">
        <div class="card-body">
          <h5 class="card-title">
            Abreviação:
          </h5>
          <p>{{ team.abbreviation }}</p>

          <h5 class="card-title">
            Nome simples:
          </h5>
          <p>{{ team.simpleName }}</p>

          <h5 class="card-title">
            Localização:
          </h5>
          <p>{{ team.location }}</p>
        </div>
      </div>

      <div class="col-7">
        <div class="card-body">
          <h5 class="card-title">
              Jogadores:
          </h5>
          <div class="overflow-auto list-container">
            <ul class="list-group list-group-flush">
              <li
                v-for="player in team.players"
                :key="player.playerId"
                class="list-group-item"
              >
                {{ player.firstName }} {{ player.lastName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      default: () => {},
    },
    fetchPlayers: {
      type: Function,
      default: () => {},
    }
  }
}
</script>

<style scoped>
  .list-container {
    max-height: 200px;
  }
</style>