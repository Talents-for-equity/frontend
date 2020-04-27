<template>
  <div>
    <h2>Personal data
      <button v-if="!activeEdit" v-on:click="edit">Edit</button>
    </h2>
    <div v-if="!activeEdit">
      <div>Phone number: {{user.phone}}</div>
      <div>Zip code: {{user.zip}}</div>
      <div v-if="isSeeker">Vat number: {{user.vat}}</div>
    </div>

    <div v-if="activeEdit" class="editInputs">
      <div>
        <div class="left">
          <div class="label">Last name</div>
          <input type="text" v-model="userEdit.lastName">
        </div>
        <div>
          <div class="label">Phone number (optional)</div>
          <input type="text" v-model="userEdit.phone">
        </div>
        <div>
          <div class="label">New password</div>
          <input type="password">
        </div>
      </div>
      <div>
        <div>
          <div class="label">First name</div>
          <input type="text" v-model="userEdit.firstName">
        </div>
        <div>
          <div class="label">Zip code</div>
          <input type="text" v-model="userEdit.zip">
        </div>
        <div v-if="isSeeker">
          <div class="label">Vat number</div>
          <input type="text" v-model="userEdit.vat">
        </div>
      </div>
    </div>
    <div class="editButtons" v-if="activeEdit">
      <button v-on:click="dismiss">Dismiss</button>
      <button v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import users from '@/store/modules/user/users'
import HighlightedOption from '@/components/profile/HighlightedOption.vue'
import { User, UserType } from '@/store/modules/user/user'

@Component({
  components: { HighlightedOption }
})
export default class PersonalData extends Vue {
  activeEdit = false

  userEdit!: User

  get user (): User {
    return users.activeUser
  }

  get isSeeker (): boolean {
    return this.user.userType === UserType.Seeker
  }

  edit () {
    this.activeEdit = true
    this.userEdit = this.user
  }

  dismiss () {
    this.activeEdit = false
  }

  async save () {
    this.activeEdit = false
    await users.saveUser(this.userEdit)
  }
}
</script>

<style scoped lang="scss">
  button {
    width: 100px !important;
    height: 30px !important;
    margin-right: 1em;
  }

  input {
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 7px;
    height: 30px;
  }

  .label {
    font-weight: 500;
    font-size: 16px;
    color: #595959;
  }

  .editInputs {
    display: flex;
    margin-bottom: 1em;

    .left {
      padding-right: 2em;
    }
  }
</style>
