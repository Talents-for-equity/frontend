<template>
  <div class="registration-form">
    <form action>
        <label>Email</label><input type="text" v-model="data.email" /> <br>
      <label>Password</label><input type="password" v-model="data.password" /> <br>
      <input type="button" v-on:click="login" value="Login">
    </form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import router from '@/router/index'

@Component
export default class LoginForm extends Vue {
  private data: LoginData = {
    password: '',
    email: ''
  }

  login () {
    router.push('Home')
  }
}
interface LoginData {
  password: string;
  email: string;
}
</script>

<style>

</style>
