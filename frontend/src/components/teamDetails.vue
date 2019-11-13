<template>
  <div class="card">
    <div class="card-header bg-danger text-white">
      {{ team.teamName }}
    </div>
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

      <router-link
        class="btn btn-primary"
        :to="{ path: 'Team', params: {team: 'casotto'} }"
      >
        Ver Detalhes
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style>

</style>