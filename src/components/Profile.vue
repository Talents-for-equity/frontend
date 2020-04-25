<template>
  <div>
    <h1>{{user.name}}</h1>
    <h3>{{skills}}</h3>
    <div class="rating">Rating: {{user.rating}}</div>
    <div class="description">{{user.description}}</div>
    <div class="typeOfProjects">
      <h4>Type of projects</h4>
      <div v-for="projectType in projectTypeNames" :key="projectType.key"
      v-bind:class="{ highlight: projectType.highlight }">
        {{projectType.name}}
      </div>
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import users, { projectTypeNames, skillNames, User } from '@/store/modules/users'

@Component
export default class Profile extends Vue {
  get user (): User {
    return users.user
  }

  get skills (): string {
    return this.user.skills.map(skill => skillNames[skill]).join(', ')
  }

  get projectTypeNames (): { key: number; name: string; highlight: boolean }[] {
    return Object.keys(projectTypeNames).map(key => {
      const numberKey = parseInt(key)
      return {
        key: numberKey,
        name: projectTypeNames[numberKey],
        highlight: this.user.projectTypes.indexOf(numberKey) !== -1
      }
    })
  }

  higlightProjectType (key: number) {
    return true
  }
}
</script>

<style scoped lang="scss">
  .highlight {
    color: blue;
  }
</style>
