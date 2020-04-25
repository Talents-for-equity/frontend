<template>
   <div id="nav">
      <router-link to="/">I need help </router-link>
      <router-link v-if="isLoggedIn" to="/profile">My account</router-link>
      <router-link v-if="!isLoggedIn" to="/login">My account</router-link>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import users from '@/store/modules/users'

@Component
export default class NavBar extends Vue {
  get isLoggedIn () {
    return users.isLoggedIn
  }
}
</script>

<style lang="scss">
#nav {
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
  text-align: right;
  padding: 1rem 4rem 1rem 0rem;
  a {
    padding: 1rem;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: .1s;
    &.router-link-exact-active, &:hover {
      text-decoration: underline;
    }
  }
}
</style>
