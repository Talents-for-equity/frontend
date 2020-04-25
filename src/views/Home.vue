<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator'
import UserInfo from '@/components/UserInfo.vue'

@Component({
  components: {
    UserInfo
  }
})
export default class Home extends Vue {
}
</script>
