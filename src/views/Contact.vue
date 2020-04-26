<template>
  <div>
    <h1>Contact</h1>
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
        <div class="label">LinkedIn</div>
        <input type="text" v-model="contactForm.linkedin">
      </div>
      <div>
        <div class="label">Comment</div>
        <textarea v-model="contactForm.comment"></textarea>
      </div>
      <button class="submitButton" v-on:click="submitContact">Submit</button>
    </div>

    <div v-if="!showForm" class="contactDataSent">
      <h3>Contact data sent</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export interface ContactData {
  name: string;
  email: string;
  linkedin: string;
  comment: string;
}

@Component
export default class Profile extends Vue {
  contactForm: ContactData = {
    name: '',
    email: '',
    linkedin: '',
    comment: ''
  }

  showForm = true

  submitContact () {
    this.showForm = false
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
