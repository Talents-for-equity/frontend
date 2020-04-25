<template>
   <div>
     <h4>Project title</h4>
     <!-- <div class="description">
         <p>{{ resultData.projectTitle }}</p>
          <p>{{ resultData.rating }}</p>
         <p>{{ resultData.description }}</p>
     </div> -->
    <div v-for="data in resultData" :key="data.key">
        <p>{{ data.id }}</p>
        <p>{{ data.projectTitle }}</p>
        <p>{{ data.description }}</p>
     </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SeekerSearchResults } from '@/components/search/SeekerSearch.vue'

@Component
export default class Project extends Vue {
 @Prop() resultData!: SeekerSearchResults[]
}

</script>

<style lang="scss">

</style>
