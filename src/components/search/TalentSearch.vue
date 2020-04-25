<template>
  <div>
    SearchTalent
    <Filters :options="contractConditions"
             title="Contracting conditions"
             v-on:optionSelected="contractConditionSelected"/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Filters from '@/components/search/Filters.vue'
import { ContractCondition, getContractConditionSelectOptions } from '@/store/modules/users'

@Component({
  components: {
    Filters
  }
})
export default class TalentSearch extends Vue {
  get contractConditions () {
    return getContractConditionSelectOptions()
  }

  contractConditionSelected (selectedOptions: ContractCondition[]) {
    console.log('selected contract conditions', selectedOptions)
  }
}
</script>

<style lang="scss">

</style>
