<template>
  <div>
    <div id="isSeekerTalent">
      <h2>Are you a</h2>
      <input v-on:click="userIsSeeker = true" class="blue-button" type="button" value="Seeker"/>
      <input @click="userIsSeeker = false" class="blue-button" type="button" value="Talent"/>
    </div>

    <RegistrationForm
      v-on:register="register"
      :user-is-seeker="userIsSeeker"
      v-if="!showSuccessful"
    />
    <RegistrationSuccessful v-if="showSuccessful"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import RegistrationForm from '@/components/RegistrationForm.vue'
import RegistrationSuccessful from '@/components/RegistrationSuccessful.vue'
import IsSeekerTalent from '@/components/IsSeekerTalent.vue'

@Component({
  components: {
    RegistrationForm,
    RegistrationSuccessful,
    IsSeekerTalent
  }
})
export default class Registration extends Vue {
  private showSuccessful = false
  private userIsSeeker = false

  register () {
    this.showSuccessful = true
  }
}
</script>

<style lang="scss">
  .countryInput {
    margin: 0;

  }

  #app .countryInput button {
    background: none;
    width: 32px;
  }

  .countryLabel {
    position: relative;
    top: 14px;
  }
</style>
