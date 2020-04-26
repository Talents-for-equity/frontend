<template>
  <div>
    <PrototypeLinks></PrototypeLinks>
    <div class="profileButtons">
<!--      <button v-on:click="logout">Logout</button>-->
      <button v-on:click="edit" v-if="view">Edit</button>
      <button v-on:click="showView" v-if="!view">View</button>
    </div>
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
import PrototypeLinks from '@/components/PrototypeLinks.vue'

@Component({
  components: {
    PrototypeLinks,
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

<style scoped>
  .profileButtons button {
    width: 100px !important;
    margin-right: 1em;
  }
</style>
