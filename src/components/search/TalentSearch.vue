<template>
  <div>
    <h2>Find a right person</h2>
    <Filters :options="contractConditions"
             title="Contracting conditions"
             v-on:optionSelected="contractConditionSelected"/>
  <div id="result">
    <TalentSearchResult :result-data="johnDoeTalentResult"/>
  </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Filters from '@/components/search/Filters.vue'
import TalentSearchResult from '@/components/search/TalentSearchResult.vue'
import Messages from '@/components/search/Messages.vue'
import { ContractCondition, getContractConditionSelectOptions } from '@/store/modules/user/user'

export interface TalentSearchResults {
  id: number;
  firstName: string;
  lastName: string;
  rating: number;
  description: string;
}

@Component({
  components: {
    Filters,
    TalentSearchResult,
    Messages
  }
})
export default class TalentSearch extends Vue {
  johnDoeTalentResult: TalentSearchResults[] = [{
    id: 123,
    firstName: 'John',
    lastName: 'Doe',
    description: 'Lorem ipsum',
    rating: 4.5
  },
  {
    id: 123,
    firstName: 'John???',
    lastName: 'Doe???',
    description: 'Lorem ipsum',
    rating: 4.5
  }]

  get contractConditions () {
    const value = getContractConditionSelectOptions()
    console.log('value', value)
    return value
  }

  contractConditionSelected (selectedOptions: ContractCondition[]) {
    console.log('selected contract conditions', selectedOptions)
  }
}
</script>

<style lang="scss">

</style>
