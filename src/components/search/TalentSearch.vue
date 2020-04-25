<template>
   <div>
      SearchTalent
      <Filters/>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Filters from '@/components/search/Filters.vue'
// import { getContractConditionSelectOptions } from '@/store/modules/users'

@Component({
  components: {
    Filters
  }
})
export default class TalentSearch extends Vue {

   // get contractConditions () {
   //   return getContractConditionSelectOptions()
   // }
}
</script>

<style lang="scss">

</style>
