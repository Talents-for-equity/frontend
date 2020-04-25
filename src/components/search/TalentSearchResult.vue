<template>
   <div>
     <h4>Project title</h4>
     <!-- <div class="description">
         <p>{{ resultData.firstName }}</p>
         <p>{{ resultData.lastName }}</p>
         <p>{{ resultData.description }}</p>
         <p>{{ resultData.rating }}</p>
     </div> -->
    <div v-for="data in resultData" :key="data.key">
        <p>{{ data.id }}</p>
        <p>{{ data.firstName }}</p>
        <p>{{ data.lastName }}</p>
        <p>{{ data.rating }}</p>
     </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TalentSearchResults } from '@/components/search/TalentSearch.vue'

@Component
export default class Project extends Vue {
 @Prop() resultData!: TalentSearchResults[]
}

</script>

<style lang="scss">

</style>
