<template>
  <div>
    <PrototypeLinks></PrototypeLinks>
    <div id="isSeekerTalent">
      <h2>Are you a</h2>
      <input v-on:click="userStatus" class="blue-button" type="button" value="Seeker" />
      <input class="blue-button" type="button" value="Talent" />
    </div>

    <RegistrationForm
      v-on:register="register"
      :user-is-seeker="userIsSeeker"
      v-if="!showSuccessful"
    />
    <RegistrationSuccessful v-if="showSuccessful" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import RegistrationForm from '@/components/RegistrationForm.vue'
import RegistrationSuccessful from '@/components/RegistrationSuccessful.vue'
import IsSeekerTalent from '@/components/IsSeekerTalent.vue'
import PrototypeLinks from '@/components/PrototypeLinks.vue'

@Component({
  components: {
    PrototypeLinks,
    RegistrationForm,
    RegistrationSuccessful,
    IsSeekerTalent
  }
})
export default class Registration extends Vue {
  private showSuccessful = false;
  private userIsSeeker = false;

  register () {
    console.log('more Jägermeister')
    this.showSuccessful = true
  }

  @Emit('userStatusUpdate')
  public userStatus () {
    console.log('Change status')
    this.userIsSeeker = true
  }
}
</script>

<style>
</style>
