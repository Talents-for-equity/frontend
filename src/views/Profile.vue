<template>
  <div>
    <button v-on:click="logout">Logout</button>
    <button v-on:click="edit" v-if="view">Edit</button>
    <button v-on:click="showView" v-if="!view">View</button>
    <ProfileEdit v-if="!view"/>
    <ProfileView v-if="view"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProfileEdit from '@/components/ProfileEdit.vue'
import ProfileView from '@/components/ProfileView.vue'
import users from '@/store/modules/users'
import router from '@/router'

@Component({
  components: {
    ProfileView,
    ProfileEdit
  }
})
export default class Profile extends Vue {
  view = true

  async logout () {
    await users.logout()
    await router.push('/home')
  }

  edit () {
    this.view = false
  }

  showView () {
    this.view = true
  }
}
</script>

<style>

</style>
