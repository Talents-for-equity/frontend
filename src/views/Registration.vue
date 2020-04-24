<template>
  <div>
    <RegistrationForm v-on:register="register" v-if="!showSuccessful" />
    <RegistrationSuccessful v-if="showSuccessful" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RegistrationForm from '@/components/RegistrationForm.vue'
import RegistrationSuccessful from '@/components/RegistrationSuccessful.vue'

@Component({
  components: {
    RegistrationForm,
    RegistrationSuccessful
  }
})
export default class Registration extends Vue {
  private showSuccessful = false

  register () {
    console.log('more Jägermeister')
    this.showSuccessful = true
  }
}
</script>

<style>
</style>
