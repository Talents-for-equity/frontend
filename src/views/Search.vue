<template>
   <div>
      Search
      <TalentSearch/>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import TalentSearch from '@/components/search/TalentSearch.vue'

@Component({
  components: {
    TalentSearch
  }
})
export default class Search extends Vue {
}
</script>

<style lang="scss">

</style>
