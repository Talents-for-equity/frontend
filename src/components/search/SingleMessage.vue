<template>
   <div>
     <!-- <img src="" alt="" srcset=""> -->
     <p>{{ messageData.firstName }} {{ messageData.lastName }}</p>
     <p>{{ messageData.rating }}</p>
     <p>{{ messageData.lastText }}</p>
     <!-- <div v-for="i in messageData" :key="i.key">
        <p>{{ i.firstName }} {{ i.lastName }}</p>
        <p>{{ i.firstName }}</p>
        <p>{{ i.lastName }}</p>
     </div> -->
     <input type="button" value="Archive" />
     <input type="button" value="Reply" />
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { MessagesResults } from '@/components/search/Messages.vue'

@Component
export default class SingleMessage extends Vue {
 @Prop() messageData!: MessagesResults[]
}
</script>

<style lang="scss">

</style>
