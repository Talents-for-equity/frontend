<template>
  <div class="links">
    <router-link to="/profile">Profile</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/registration">Registration</router-link>
    |
    <router-link to="/search">Search</router-link>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PrototypeLinks extends Vue {
}

</script>

<style scoped lang="scss">
  .links {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &
      .router-link-exact-active {
        color: #42b983;
      }

    }
  }

</style>
