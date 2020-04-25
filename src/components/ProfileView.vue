<template>
  <div>
    <div class="container">
      <ProfileHeader :show-switch="false" class="profileHeader"></ProfileHeader>
      <div v-if="isTalent">
        <h2 class="portfolioHeader">Cases Portfolio</h2>
        <PortfolioProject v-for="project in user.portfolio" :key="project.title"
                          :project="project"></PortfolioProject>
      </div>
      <div v-if="isSeeker">
        <HighlightOption highlight-title="Contracting conditions" :options="contractingConditionsNames"
                         :highlight-keys="contractingConditionsHighlight" v-on:save="saveContractingConditions"
                         :read-only="true">
        </HighlightOption>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import users, {
  BusinessType,
  businessTypeNames,
  ContractCondition, getBusinessTypeOptions,
  getContractConditionSelectOptions,
  getPaymentTypeSelectOptions, getSkillSelectOptions,
  PaymentType,
  ProjectType, Skill,
  skillNames,
  User,
  UserModule,
  UserType
} from '@/store/modules/users'
import HighlightOption from '@/components/profile/HighlightedOption.vue'
import PortfolioProject from '@/components/profile/PortfolioProject.vue'
import router from '@/router/index'
import PersonalData from '@/components/profile/PersonalData.vue'
import ProfileHeader from '@/components/profile/ProfileHeader.vue'

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

  get contractingConditionsNames () {
    return getContractConditionSelectOptions()
  }

  get contractingConditionsHighlight () {
    return this.user.contractConditions
  }

  get isSeeker (): boolean {
    return this.user.userType === UserType.Seeker
  }

  get isTalent (): boolean {
    return this.user.userType === UserType.Talent
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

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .container>div {
    flex: 1 320px;
    width: 100%;
  }

  .profileHeader {
    padding-right: 1em;
  }

  .portfolioHeader {
    font-size: 32px;
    color: #404040;
    margin-bottom: 16px;
  }
</style>
