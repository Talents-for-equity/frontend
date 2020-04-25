<template>
  <div>
    <h4>{{project.title}}</h4>
    <div class="rating">Rating: {{project.rating}}</div>
    <div>{{project.description}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Project } from '@/store/modules/users'

@Component
export default class PortfolioProject extends Vue {
  @Prop() project!: Project
}
</script>

<style scoped>

</style>
