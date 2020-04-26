<template>
  <div>
    <h1>Preregistration</h1>
    <div v-if="showForm">

      <div>
        <div class="label">Name</div>
        <input type="text" v-model="contactForm.name">
      </div>

      <div>
        <div class="label">Email</div>
        <input type="text" v-model="contactForm.email">
      </div>

      <div>
        <div class="label">Country</div>
        <input type="text" v-model="contactForm.country">
      </div>

      <div>
        <div class="label">Zip Code</div>
        <input type="text" v-model="contactForm.zip">
      </div>

      <div>
        <div class="label">LinkedIn</div>
        <input type="text" v-model="contactForm.linkedin">
      </div>

      <div>
        <div class="label">Profession</div>
        <input type="text" v-model="contactForm.profession">
      </div>

      <div>
        <div class="label">I am expert and talent</div>
        <input type="checkbox" v-model="contactForm.talent">
      </div>

       <div>
        <div class="label">I am interested to find talents and experts for my business</div>
        <input type="checkbox" v-model="contactForm.seeker">
      </div>
      <div>
        <div class="label">Newsletter. Just facts, no spam, no ads.</div>
        <input type="checkbox" v-model="contactForm.newsletter">
      </div>
      <button v-on:click="submitContact">Submit</button>
      <GoogleLogin></GoogleLogin>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import GoogleLogin from '@/components/GoogleLogin.vue'

export interface ContactData {
  name: string;
  email: string;
  linkedin: string;
  country: string;
  zip: string;
  profession: string;
  talent: boolean;
  seeker: boolean;
  newsletter: boolean;
}

interface SendInBlue {
  track (eventName: string, props: any): void;
}

declare const sendinblue: SendInBlue
@Component({
  components: { GoogleLogin }
})
export default class Preregistration extends Vue {
  contactForm: ContactData = {
    name: '',
    email: '',
    linkedin: '',
    country: '',
    zip: '',
    profession: '',
    talent: false,
    seeker: false,
    newsletter: false
  }

  showForm = true

  async submitContact () {
    // sendinblue.track('preregistration', this.contactForm)
    this.showForm = false
    await Axios.post('https://tfe-reg.pandemy.xyz/mapping', this.contactForm)
  }
}
</script>

<style lang="scss" scoped>
  .submitButton {
    margin-top: 1em;
  }

  input, textarea {
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 7px;
    height: 30px;
    width: 300px;
  }

  textarea {
    height: 100px;
  }

  .label {
    margin-top: 0.5em;
    font-weight: 500;
    font-size: 16px;
    color: #595959;
  }

  button {
    width: 300px !important;
  }

  .contactDataSent {
    h3 {
      margin-top: 3em;
    }
  }
</style>
