<template>
  <div>
    <button v-on:click="logout">Logout</button>
    <h1>{{user.firstName}} {{user.lastName}}</h1>
    <h3>{{skills}}
      <div class="onoffswitch">
        <input @change="switchProfile" type="checkbox" name="onoffswitch" class="onoffswitch-checkbox"
               id="myonoffswitch" checked>
        <label class="onoffswitch-label" for="myonoffswitch"></label>
      </div>
      <span class="profileSwitchLabel">Switch profile</span></h3>
    <h3 v-if="isSeeker">{{user.seekerType}}</h3>
    <div class="rating">Rating: {{user.rating}}</div>
    <div class="description">{{user.description}}</div>
    <div class="typeOfProjects">
      <HighlightOption highlight-title="Type of payment" :options="paymentOptionsNames"
                       :highlight-keys="paymentOptionsHighlight" v-on:save="savePaymentOptions"></HighlightOption>
      <HighlightOption highlight-title="Type of projects" :options="typeOfProjectNames"
                       :highlight-keys="typeOfProjectsHighlight" v-on:save="saveTypeOfProjects"></HighlightOption>
    </div>
    <div v-if="isTalent">
      <h2>Cases Portfolio</h2>
      <PortfolioProject v-for="project in user.portfolio" :key="project.title"
                        :project="project"></PortfolioProject>
    </div>
    <div v-if="isSeeker">
      <HighlightOption highlight-title="Contracting conditions" :options="contractingConditionsNames"
                       :highlight-keys="contractingConditionsHighlight" v-on:save="saveContractingConditions">
      </HighlightOption>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import users, {
  businessTypeNames,
  ContractCondition,
  getContractConditionSelectOptions,
  getPaymentTypeSelectOptions,
  PaymentType,
  ProjectType,
  skillNames,
  User,
  UserModule,
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
    return getPaymentTypeSelectOptions()
  }

  get typeOfProjectsHighlight () {
    return this.user.projectTypes
  }

  get paymentOptionsNames () {
    return getPaymentTypeSelectOptions()
  }

  get paymentOptionsHighlight () {
    return this.user.paymentTypes
  }

  get contractingConditionsNames () {
    return getContractConditionSelectOptions()
  }

  get contractingConditionsHighlight () {
    return this.user.contractConditions
  }

  get skills (): string {
    if (this.user.userType === UserType.Talent) {
      return this.user.skills.map(skill => skillNames[skill]).join(', ')
    }
    return this.user.businessTypes.map(skill =>
      businessTypeNames[skill]).join(', ')
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

  switchProfile () {
    if (this.user.userType === UserType.Seeker) {
      this.user.userType = UserType.Talent
    } else {
      this.user.userType = UserType.Seeker
    }
  }
}
</script>

<style scoped lang="scss">
  .highlight {
    color: blue;
  }

  .profileSwitchLabel, .switch {
    font-size: 10px;
    font-weight: normal;
  }

  /* https://proto.io/freebies/onoff/ */
  .onoffswitch {
    position: relative;
    width: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    display: inline-block;
  }

  .onoffswitch-checkbox {
    display: none;
  }

  .onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 20px;
    padding: 0;
    line-height: 20px;
    border: 2px solid #FFFFFF;
    border-radius: 20px;
    background-color: #9E9E9E;
    transition: background-color 0.3s ease-in;
  }

  .onoffswitch-label:before {
    content: "";
    display: block;
    width: 20px;
    margin: 0px;
    background: #FFFFFF;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 18px;
    border: 2px solid #FFFFFF;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }

  .onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: #1667E0;
  }

  .onoffswitch-checkbox:checked + .onoffswitch-label, .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    border-color: #1667E0;
  }

  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    right: 0px;
  }
</style>
