<template>
   <div>
     <div v-for="i in messageData" :key="i.key">
        <p>{{ i.firstName }} {{ i.lastName }}</p>
        <p>{{ i.rating }}</p>
        <p>{{ i.lastText }}</p>
        <input type="button" value="Archive" />
        <input type="button" value="Reply" />
     </div>
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
