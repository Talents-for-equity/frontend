<template>
  <div>
      <Profile/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Profile from '@/components/Profile.vue'

@Component({
  components: {
    Profile
  }
})
export default class ProfileView extends Vue {
}
</script>

<style>

</style>
