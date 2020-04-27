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
        <div class="label">LinkedIn <span>*Optional</span></div>
        <input type="text" v-model="contactForm.linkedin">
      </div>

      <div>
        <div class="label">Profession</div>
        <input type="text" v-model="contactForm.profession" placeholder=" e.g. Developer">
      </div>
       <div class="checkboxes">
      <label class="checkboxWrapper container">
        <input type="checkbox" v-model="contactForm.talent"> <span>I am expert and talent</span>
         <span class="checkmark"></span>
      </label>

      <label class="checkboxWrapper container">
        <input type="checkbox" v-model="contactForm.seeker"><span>I am interested to find talents and experts for my business</span>
         <span class="checkmark"></span>
      </label>

      <label class="checkboxWrapper container">
        <input type="checkbox" v-model="contactForm.newsletter"> <span>Newsletter. Just facts, no spam, no ads.</span>
         <span class="checkmark"></span>
      </label>
    </div>
      <button v-on:click="submitContact">Submit</button>
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

  async submitContact () {
    // sendinblue.track('preregistration', this.contactForm)
    this.showForm = false
    await Axios.post('https://tfe-reg.pandemy.xyz/mapping', this.contactForm)
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.preRegistration{
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-size: 1rem;
  .checkboxes{
    padding: 1rem 0;
  }
  .form{
    justify-content: center;
    max-width: 350px;
     margin: auto;
     .label{
       span{
         font-size: .7rem;
       }
     }
  }
}
  .submitButton {
    margin-top: 1em;
  }

input[type=checkbox]{
    width: 20px;
    height: 20px;
  }

  input[type=text]{
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 7px;
    height: 2.5rem;
    font-size: 1rem;
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

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
    input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    &:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: rgb(116, 184, 240);
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

</style>
