<template>
  <div class="registration-form">
    <h2 >{{ userIsSeeker ? 'Sekeer' : 'Talent' }}</h2>
    <form action>
      <label>Name</label><input type="text" v-model="data.username" /> <br>
       <label>Email</label><input type="text" v-model="data.email" /> <br>
       <label>Password</label><input type="password" v-model="data.password" /> <br>
      <input type="button" v-on:click="sendRegistration" value="Register">
    </form>
    <div v-if="error" class="error">
      {{errorMessage}}
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import users from '@/store/modules/user/users'
import { RegistrationValues, UserAlreadyExistsError } from '@/store/modules/user/UserService'
import { User } from '@/store/modules/user/user'

@Component
export default class RegistrationForm extends Vue {
  @Prop() userIsSeeker!: boolean
  private data: RegistrationValues = {
    username: '',
    password: '',
    email: ''
  }

  errorMessage = ''
  error = false

  async sendRegistration () {
    console.log('send registration', this.data)
    try {
      const result = await users.createUser(this.data)
      console.log('wat result', result)
      this.emitRegistration(result)
    } catch (error) {
      this.error = true
      if (error instanceof UserAlreadyExistsError) {
        this.errorMessage = 'User already exists'
      } else {
        this.errorMessage = 'Some error occurred'
      }
    }
  }

  @Emit('register')
  emitRegistration (user: User) {
    return user
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

<style scoped lang="scss">
  .error {
    color: red;
  }
</style>
