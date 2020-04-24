<template>
  <div>
    Add something
    <input type="button" v-on:click="profile" value="Your profile">
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import router from '@/router/index'

@Component
export default class RegistrationSuccessful extends Vue {
  profile () {
    router.push('Profile')
  }
}
</script>

<style>

</style>
