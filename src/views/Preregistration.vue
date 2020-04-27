<template>
  <div class="preRegistration">
    <div v-if="showForm" class="form">
    <div>

      <div>
        <div class="label">Email</div>
        <input type="email" v-model="contactForm.email">
      </div>

      <div class="countrySelect">
        <div class="countryLabel label">Country</div>
        <md-autocomplete class="countryInput"
                         v-model="contactForm.country" :md-options="countries">
        </md-autocomplete>
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
      <div v-if="emailError" class="error">
        Email address is invalid
      </div>
      <div v-if="countryError" class="error">
        Country is invalid
      </div>
      <div v-if="zipError" class="error">
        Zip code is required
      </div>
      <div v-if="professionError" class="error">
        Profession is required
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
  countryError = false
  zipError = false
  professionError = false

  countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre & Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts & Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe']

  async submitContact () {
    if (this.isEmailInvalid() || this.isCountryInvalid() || this.isZipError() ||
        this.isProfessionError()) {
      return
    }
    await Axios.post('https://tfe-reg.pandemy.xyz/mapping', this.contactForm)
    await router.push('/')
  }

  private isEmailInvalid () {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.emailError = !re.test(this.contactForm.email)
    return this.emailError
  }

  private isCountryInvalid () {
    const found = this.countries.find(country => this.contactForm.country === country)
    this.countryError = found === undefined
    return this.countryError
  }

  private isZipError () {
    this.zipError = this.contactForm.zip.length === 0
    return this.zipError
  }

  private isProfessionError () {
    this.professionError = this.contactForm.profession.length === 0
    return this.professionError
  }
}
</script>

<style lang="scss" scoped>
  .countrySelect {
    position: relative;
    top: -15px;
    .md-field {
      width: 300px;
    }
  }

.preRegistration{
  padding-top: 3rem;
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

  input[type=text], input[type=email]{
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

  .error {
    color: red;
    margin-bottom: 5px;
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
