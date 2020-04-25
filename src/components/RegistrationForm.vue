<template>
  <div class="registration-form">
    <h2 >{{ userIsSeeker ? 'Sekeer' : 'Talent' }}</h2>
    <form action>
      <label>Name</label><input type="text" v-model="data.name" /> <br>
       <label>Email</label><input type="text" v-model="data.email" /> <br>
       <label>Password</label><input type="password" v-model="data.password" /> <br>
      <input type="button" v-on:click="sendRegistration" value="Register">
    </form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class RegistrationForm extends Vue {
  @Prop() userIsSeeker!: boolean
  private data: RegistrationData = {
    name: '',
    password: '',
    email: ''
  }

  @Emit('register')
  public sendRegistration () {
    console.log('Jägermeister')
  }

  userStatusUpdate () {
    console.log('changed')
    this.userIsSeeker = true
  }
}
interface RegistrationData {
  name: string;
  password: string;
  email: string;
}
</script>

<style>

</style>
