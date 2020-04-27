<template>
  <div class="preRegistration">
    <div v-if="showForm" class="form">
    <div>

      <div>
        <div class="label">Username</div>
        <input type="text" v-model="contactForm.name">
      </div>

      <div>
        <div class="label">Email</div>
        <input type="email" v-model="contactForm.email">
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
        <input type="text" v-model="contactForm.profession" placeholder=" e.g. Developer">
      </div>
      <div v-if="emailError" class="error">
        Email address is invalid
      </div>
      <button v-on:click="submitContact">Submit</button>
    </div>
    <div class="checkboxes">
       <!-- <div>
        <input type="checkbox" v-model="contactForm.talent">
        <label class="label">I am expert and talent</label>
      </div> -->
    <!-- <div class="checkboxWrapper">
            <input type="checkbox" v-model="contactForm.seeker">
            <div class="label">I am interested to find talents and experts for my business</div>
          </div>
          <div class="checkboxWrapper">
            <input type="checkbox" v-model="contactForm.newsletter">
            <div class="label">Newsletter. Just facts, no spam, no ads.</div>
          </div> -->
      <label class="checkboxWrapper">
        <input type="checkbox" v-model="contactForm.talent"> I am expert and talent
        <span class="checkmark"></span>
      </label>

      <label class="checkboxWrapper">
        <input type="checkbox" v-model="contactForm.seeker">I am interested to find talents and experts for my business
        <span class="checkmark"></span>
      </label>

      <label class="checkboxWrapper">
        <input type="checkbox" v-model="contactForm.newsletter"> Newsletter. Just facts, no spam, no ads.
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import router from '@/router/index'

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

@Component
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
  emailError = false

  async submitContact () {
    if (this.isEmailInvalid()) {
      return
    }
    this.showForm = false
    await Axios.post('https://tfe-reg.pandemy.xyz/mapping', this.contactForm)
    router.push('/')
  }

  private isEmailInvalid () {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.emailError = !re.test(this.contactForm.email)
    return this.emailError
  }
}
</script>

<style lang="scss" scoped>
.preRegistration{
  padding-top: 3rem;
  width: 80%;
  max-width: 1500px;
  margin: auto;
  font-size: 1.2rem;
  .checkboxes{
    padding: 1rem 0;
  }
  .form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   .checkboxWrapper{
    display: flex;
    padding: .5rem;
    font-weight: 500;
    input[type=checkbox]{
      margin-right: 1rem;
    }
  }
  }
}
  .submitButton {
    margin-top: 1em;
  }

  input[type=text], input[type=email]{
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 7px;
    height: 2.5rem;
    width: 300px;
    padding-left: .5rem;
    margin-bottom: 1rem;
  }

  textarea {
    height: 100px;
  }

  .label {
    margin-bottom: 0.5em;
    font-weight: 500;
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

  .error {
    color: red;
    margin-bottom: 5px;
  }
</style>
