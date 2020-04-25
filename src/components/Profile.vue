<template>
  <div>
    <button v-on:click="logout">Logout</button>
    <h1>{{user.firstName}} {{user.lastName}}</h1>
    <h3 v-if="isTalent">{{skills}}</h3>
    <h3 v-if="isSeeker">{{user.seekerType}}</h3>
    <div class="rating">Rating: {{user.rating}}</div>
    <div class="description">{{user.description}}</div>
    <div class="typeOfProjects">
      <HighlightOption highlight-title="Type of payment" :option-names="paymentOptionsNames"
                       :highlight-keys="paymentOptionsHighlight" v-on:save="savePaymentOptions"></HighlightOption>
      <HighlightOption highlight-title="Type of projects" :option-names="typeOfProjectNames"
                       :highlight-keys="typeOfProjectsHighlight" v-on:save="saveTypeOfProjects"></HighlightOption>
    </div>
    <div v-if="isTalent">
      <h2>Cases Portfolio</h2>
      <PortfolioProject v-for="project in user.portfolio" :key="project.title"
                        :project="project"></PortfolioProject>
    </div>
    <div v-if="isSeeker">
      <HighlightOption highlight-title="Contracting conditions" :option-names="contractingConditionsNames"
                       :highlight-keys="contractingConditionsHighlight" v-on:save="saveContractingConditions">
      </HighlightOption>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import users, {
  ContractCondition,
  contractConditionNames, PaymentType,
  paymentTypeNames, ProjectType,
  projectTypeNames,
  skillNames,
  User, UserModule,
  UserType
} from '@/store/modules/users'
import HighlightOption from '@/components/profile/HighlightedOption.vue'
import PortfolioProject from '@/components/profile/PortfolioProject.vue'
import router from '@/router/index'

@Component({
  components: {
    PortfolioProject,
    HighlightOption
  }
})
export default class Profile extends Vue {
  get user (): User {
    return users.activeUser
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

  get contractingConditionsNames () {
    return contractConditionNames
  }

  get contractingConditionsHighlight () {
    return this.user.contractConditions
  }

  get skills (): string {
    return this.user.skills.map(skill => skillNames[skill]).join(', ')
  }

  get isSeeker (): boolean {
    return this.user.userType === UserType.Seeker
  }

  get isTalent (): boolean {
    return this.user.userType === UserType.Talent
  }

  async savePaymentOptions (options: PaymentType[]) {
    const clone = UserModule.cloneUser(this.user)
    clone.paymentTypes = options
    await users.saveUser(clone)
  }

  async saveTypeOfProjects (options: ProjectType[]) {
    const clone = UserModule.cloneUser(this.user)
    clone.projectTypes = options
    await users.saveUser(clone)
  }

  async saveContractingConditions (options: ContractCondition[]) {
    const clone = UserModule.cloneUser(this.user)
    clone.contractConditions = options
    await users.saveUser(clone)
  }

  async logout () {
    await users.logout()
    await router.push('/home')
  }
}
</script>

<style scoped lang="scss">
  .highlight {
    color: blue;
  }
</style>
