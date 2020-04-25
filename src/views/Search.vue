<template>
   <div>
      <div class="feed">
        <!-- <TalentSearch/> -->
        <SeekerSearch/>
        <!-- <input class="blue-button" type="button" value="Message">
        <input class="blue-button" type="button" value="Save"> -->
      </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import TalentSearch from '@/components/search/TalentSearch.vue'
import SeekerSearch from '@/components/search/SeekerSearch.vue'

@Component({
  components: {
    TalentSearch,
    SeekerSearch
  }
})
export default class Search extends Vue {
}
</script>

<style lang="scss">

</style>
