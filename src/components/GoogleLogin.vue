<template>
  <div>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UserInfo extends Vue {
}

</script>

<style scoped>

</style>
