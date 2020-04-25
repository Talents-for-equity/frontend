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

    <div v-if="activeEdit">
      <div>
        <div class="label">Last name</div>
        <input type="text" v-model="userEdit.lastName">
      </div>
      <div>
        <div class="label">First name</div>
        <input type="text" v-model="userEdit.firstName">
      </div>
      <div>
        <div class="label">Phone number (optional)</div>
        <input type="text" v-model="userEdit.phone">
      </div>
      <div>
        <div class="label">Zip code</div>
        <input type="text" v-model="userEdit.zip">
      </div>
      <div v-if="isSeeker">
        <div class="label">Vat number</div>
        <input type="text" v-model="userEdit.vat">
      </div>
      <div>
        <div class="label">New password</div>
        <input type="text">
      </div>
      <button v-on:click="dismiss">Dismiss</button>
      <button v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import users, { User, UserType } from '@/store/modules/users'
import HighlightedOption from '@/components/profile/HighlightedOption.vue'

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

<style scoped>

</style>
