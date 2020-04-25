<template>
  <div>
    <h4 class="title">{{project.title}}</h4>
    <div class="rating">Rating: {{project.rating}}</div>
    <div class="description">{{project.description}}</div>
    <div class="border"></div>
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
  .title {
    font-size: 20px;
    color: #404040;
  }

  .description {
    font-size: 16px;
    color: #404040;
  }

  .border {
    border: 1px solid #EBEBEB;
    margin-top: 16px;
    margin-bottom: 16px;
  }
</style>
