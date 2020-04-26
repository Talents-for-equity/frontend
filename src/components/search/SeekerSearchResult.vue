<template>
   <div>
    <div  class="seeker-results" v-for="data in resultData" :key="data.key">
        <h4>{{ data.projectTitle }}</h4>
        <!-- <Rating :rating="data.rating"></Rating> -->
        <div class="tags">
            <p>{{ data.businessType }}</p>
            <p>{{ data.businessName }}</p>
            <p>{{ data.paymentCondition }}</p>
            <p>{{ data.paymentType }}</p>
        </div>
        <p>{{ data.description }}</p>
     </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SeekerSearchResults } from '@/components/search/SeekerSearch.vue'
// import Rating from '@/components/Rating.vue'

// @Component({
//   components: {
//     Rating
//   }
// })
@Component
export default class Project extends Vue {
 @Prop() resultData!: SeekerSearchResults[]
}

</script>

<style lang="scss" scope>
.seeker-results{
   h4{
       font-size: 1.7rem;
   }
   .tags{
       color:#1667E0;
       font-weight: bold;
       font-size: .8rem;
       p{
         display: inline;
         margin-right: 1rem;
       }
   }
}
</style>
