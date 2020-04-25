<template>
  <div>
    <h1>{{user.name}}</h1>
    <h3>{{skills}}</h3>
    <div class="rating">Rating: {{user.rating}}</div>
    <div class="description">{{user.description}}</div>
    <div class="typeOfProjects">
      <HighlightOption highlight-title="Type of projects" :option-names="paymentOptionsNames"
                       :highlight-keys="paymentOptionsHighlight"></HighlightOption>
      <HighlightOption highlight-title="Type of payment" :option-names="typeOfProjectNames"
                       :highlight-keys="typeOfProjectsHighlight"></HighlightOption>
    </div>
    <h2>Cases Portfolio</h2>
    <PortfolioProject v-for="project in user.portfolio" :key="project.title"
    :project="project"></PortfolioProject>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import users, { paymentTypeNames, projectTypeNames, skillNames, User } from '@/store/modules/users'
import HighlightOption from '@/components/profile/HighlightedOption.vue'
import PortfolioProject from '@/components/profile/PortfolioProject.vue'

@Component({
  components: {
    PortfolioProject,
    HighlightOption
  }
})
export default class Profile extends Vue {
  get user (): User {
    return users.user
  }

  get typeOfProjectNames () {
    return projectTypeNames
  }

  get typeOfProjectsHighlight () {
    return this.user.projectTypes
  }

  get paymentOptionsNames () {
    return paymentTypeNames
  }

  get paymentOptionsHighlight () {
    return this.user.paymentTypes
  }

  get skills (): string {
    return this.user.skills.map(skill => skillNames[skill]).join(', ')
  }
}
</script>

<style scoped lang="scss">
  .highlight {
    color: blue;
  }
</style>
