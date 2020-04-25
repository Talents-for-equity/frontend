<template>
  <div>
    <Filters
      :options="contractConditions"
      title="Contracting conditions"
      v-on:optionSelected="contractConditionSelected"
    />
    <div id="result">
       <input type="text" placeholder="Search..">
        <input type="button" value="Search" class="blue-button">
      <SeekerSearchResult :result-data="SeekerResult" />
      <Messages />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import {
  ContractCondition,
  getContractConditionSelectOptions
} from '@/store/modules/users'
import Filters from '@/components/search/Filters.vue'
import SeekerSearchResult from '@/components/search/SeekerSearchResult.vue'
import Messages from '@/components/search/Messages.vue'

export interface SeekerSearchResults {
  id: number;
  projectTitle: string;
  rating: number;
  description: string;
  businessType: string;
  businessName: string;
  paymentCondition: string;
  paymentType: string;
}

@Component({
  components: {
    Filters,
    SeekerSearchResult,
    Messages
  }
})
export default class SeekerSearch extends Vue {
  SeekerResult: SeekerSearchResults[] = [{
    id: 661,
    projectTitle: 'Project title 2',
    description:
      'Lorem ipsum dolor sitw amet, consectetur adipiscing elit. Nulla vitae faucibus et turpis tortor egestas. Suspendisse diam amet dictum non ac sed tortor, massa.',
    rating: 4.5,
    businessType: 'Startup',
    businessName: 'Avalon ltd',
    paymentCondition: 'Monthly payment',
    paymentType: 'Credit card'
  },
  {
    id: 666,
    projectTitle: 'Project title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae faucibus et turpis tortor egestas. Suspendisse diam amet dictum non ac sed tortor, massa.',
    rating: 4.5,
    businessType: 'Startup',
    businessName: 'Avalon ltd',
    paymentCondition: 'Monthly payment',
    paymentType: 'Credit card'
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
