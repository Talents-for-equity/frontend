<template>
  <div class="seeker-feed">
    <Filters
      :options="contractConditions"
      title="Contracting conditions"
      v-on:optionSelected="contractConditionSelected"
    />
    <div class="result">
      <div class="search-bar">
         <input type="text" placeholder="Search.." v-model="search">
         <input type="button" value="Search" class="blue-button">
      </div>
      <SeekerSearchResult  :result-data="SeekerResult" />
    </div>
      <Messages />
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
  private search = '';
  SeekerResult: SeekerSearchResults[] = [{
    id: 661,
    projectTitle: 'Project title 1',
    description:
      'Lorem ipsum dolor sitw amet, consectetur adipiscing elit. Nulla vitae faucibus et turpis tortor egestas. Suspendisse diam amet dictum non ac sed tortor, massa.',
    rating: 4,
    businessType: 'Startup',
    businessName: 'Avalon ltd',
    paymentCondition: 'Monthly payment',
    paymentType: 'Credit card'
  },
  {
    id: 662,
    projectTitle: 'Project title 2',
    description:
      'Lorem ipsum doelor sitw amet, consectetur adipiscing elit. Nulla vitae faucibus et turpis tortor egestas. Suspendisse diam amet dictum non ac sed tortor, massa.',
    rating: 4,
    businessType: 'Startup',
    businessName: 'Avalon ltd',
    paymentCondition: 'Monthly payment',
    paymentType: 'Credit card'
  },
  {
    id: 666,
    projectTitle: 'Project title 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae faucibus et turpis tortor egestas. Suspendisse diam amet dictum non ac sed tortor, massa.',
    rating: 3,
    businessType: 'Startup',
    businessName: 'Avalon ltd',
    paymentCondition: 'Monthly payment',
    paymentType: 'Credit card'
  }];

  get contractConditions () {
    const value = getContractConditionSelectOptions()
    console.log('value', value)
    return value
  }

  //  filterThrough () {
  //   for (const i in this.SeekerResult) {
  //       return 
  //     }
  //   }

  contractConditionSelected (selectedOptions: ContractCondition[]) {
    console.log('selected contract conditions', selectedOptions)
  }
}
</script>

<style lang="scss" scope>
.seeker-feed{
  display: flex;
  .result{
    padding: 0 3rem;
    .search-bar{
        div{
          display: inline;
        }
      }
   }
}
</style>
