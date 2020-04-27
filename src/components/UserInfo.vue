<template>
  <div>User: {{user.firstName}} {{user.lastName}}</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import users from '@/store/modules/user/users'
import { User } from '@/store/modules/user/user'

@Component
export default class UserInfo extends Vue {
  get user (): User {
    return users.user
  }
}

</script>

<style scoped>

</style>
