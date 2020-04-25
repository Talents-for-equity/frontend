<template>
   <div>
     <h3>Messages</h3>
     <VerificationBar/>
     <SingleMessage :message-data="singleMessage" />
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import SingleMessage from '@/components/search/SingleMessage.vue'
import VerificationBar from '@/components/search/VerificationBar.vue'

export interface MessagesResults {
  id: number;
  firstName: string;
  lastName: string;
  rating: number;
  lastText: string;
  // imgSrc
}

@Component({
  components: {
    SingleMessage,
    VerificationBar
  }
})
export default class Messages extends Vue {
singleMessage: MessagesResults = {
  id: 123,
  firstName: 'John',
  lastName: 'Doe',
  rating: 4.5,
  lastText: 'Some ideas and insights...'
};
}
</script>

<style lang="scss">

</style>
