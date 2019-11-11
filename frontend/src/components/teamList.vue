<template>
  <div class="list-group">
    <template v-for="team in teamList">
      <a
        :class="activeTeam && activeTeam.teamId === team.teamId ? 'active' : ''"
        class="list-group-item list-group-item-action"
        @click="setActiveTeam(team)"
        :key="team.teamId"
        href="#"
      >
        {{ team.teamName }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'teamList',
  props: {
    teamList: {
      type: Array,
      default: () => [],
    },
    setActiveTeam: {
      type: Function,
      default: () => {},
    },
    activeTeam: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>

</style>