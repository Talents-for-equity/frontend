<template>
  <div>User: {{user.firstName}} {{user.lastName}}</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import users, { User } from '@/store/modules/users'

@Component
export default class UserInfo extends Vue {
  get user (): User {
    return users.user
  }
}

</script>

<style scoped>

</style>
