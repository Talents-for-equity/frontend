<template>
  <div class="profileEdit">
    <div class="left">
      <ProfileHeader></ProfileHeader>
      <div class="typeOfProjects">
        <HighlightOption class="left" highlight-title="Type of projects" :options="typeOfProjectNames"
                         :highlight-keys="typeOfProjectsHighlight" v-on:save="saveTypeOfProjects"></HighlightOption>
        <HighlightOption highlight-title="Type of payment" :options="paymentOptionsNames"
                         :highlight-keys="paymentOptionsHighlight" v-on:save="savePaymentOptions"></HighlightOption>
      </div>
      <PersonalData class="personalData"/>
    </div>
    <div class="right">
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
      <div v-if="isTalent">
        <HighlightOption highlight-title="Skills" :options="skillOptions"
                         :highlight-keys="selectedSkills" v-on:save="saveSkills">
        </HighlightOption>
      </div>
      <div v-if="isSeeker">
        <HighlightOption highlight-title="Business types" :options="businessTypeOptions"
                         :highlight-keys="selectedBusinessTypes" v-on:save="saveBusinessTypes">
        </HighlightOption>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import users, {
  UserModule
} from '@/store/modules/user/users'
import HighlightOption from '@/components/profile/HighlightedOption.vue'
import PortfolioProject from '@/components/profile/PortfolioProject.vue'
import router from '@/router/index'
import PersonalData from '@/components/profile/PersonalData.vue'
import ProfileHeader from '@/components/profile/ProfileHeader.vue'
import {
  BusinessType,
  businessTypeNames, ContractCondition,
  getBusinessTypeOptions, getContractConditionSelectOptions,
  getPaymentTypeSelectOptions,
  getSkillSelectOptions, PaymentType, ProjectType, Skill, skillNames,
  User, UserType
} from '@/store/modules/user/user'

@Component({
  components: {
    ProfileHeader,
    PersonalData,
    PortfolioProject,
    HighlightOption
  }
})
export default class ProfileEdit extends Vue {
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

  get skillOptions () {
    return getSkillSelectOptions()
  }

  get selectedSkills () {
    return this.user.skills
  }

  async saveSkills (skills: Skill[]) {
    this.user.skills = skills
    await users.saveUser(this.user)
  }

  get businessTypeOptions () {
    return getBusinessTypeOptions()
  }

  get selectedBusinessTypes () {
    return this.user.businessTypes
  }

  async saveBusinessTypes (types: BusinessType[]) {
    this.user.businessTypes = types
    await users.saveUser(this.user)
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
}
</script>

<style scoped lang="scss">
  .highlight {
    color: blue;
  }

  .personalData {
    margin-top: 10px;
  }

  .typeOfProjects {
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
    padding: 20px;

    .left {
      border-right: 1px solid #EBEBEB;
      margin-right: 1em;
    }
  }

  .profileEdit {
    display: flex;

    .left {
      padding-right: 1em;
    }
  }

  .profileEdit>div {
    flex: 1;
  }
</style>
