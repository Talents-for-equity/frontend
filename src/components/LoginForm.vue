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
import users from '@/store/modules/users'

@Component
export default class LoginForm extends Vue {
  private data: LoginData = {
    password: '',
    email: ''
  }

  async login () {
    await users.getUser(this.data.email)
    await router.push('/')
  }
}
interface LoginData {
  password: string;
  email: string;
}
</script>

<style>

</style>
