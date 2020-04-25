<template>
  <div>
    <h1 class="name">{{user.firstName}} {{user.lastName}}</h1>
    <h3 class="skills">{{skills}}
      <div class="onoffswitch" v-if="showSwitch">
        <input @change="switchProfile" type="checkbox" name="onoffswitch" class="onoffswitch-checkbox"
               id="myonoffswitch" checked>
        <label class="onoffswitch-label" for="myonoffswitch"></label>
      </div>
      <span class="profileSwitchLabel" v-if="showSwitch">Switch profile</span></h3>
    <Rating :rating="user.rating" :show-rating-label="true"></Rating>
    <div class="description">{{user.description}}</div>
    <div class="privacySettings" v-if="showSwitch">Privacy settings</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import users, { businessTypeNames, skillNames, User, UserType } from '@/store/modules/users'
import Rating from '@/components/Rating.vue'
@Component({
  components: { Rating }
})
export default class ProfileHeader extends Vue {
  @Prop({ default: true }) showSwitch!: boolean

  get user (): User {
    return users.activeUser
  }

  get skills (): string {
    if (this.user.userType === UserType.Talent) {
      return this.user.skills.map(skill => skillNames[skill]).join(', ')
    }
    return this.user.businessTypes.map(skill =>
      businessTypeNames[skill]).join(', ')
  }

  async switchProfile () {
    if (this.user.userType === UserType.Seeker) {
      this.user.userType = UserType.Talent
    } else {
      this.user.userType = UserType.Seeker
    }
    await users.saveUser(this.user)
  }
}
</script>

<style scoped>
  .name {
    font-size: 42px;
  }

  .skills {
    font-size: 24px;
    margin-top: 8px;
  }

  .description {
    font-size: 16px;
    color: #404040;
    margin-top: 6px;
  }

  .privacySettings {
    color: #1667E0;
    font-weight: bold;
    font-size: 18px;
    margin-top: 9px;
  }

  .profileSwitchLabel, .switch {
    font-size: 10px;
    font-weight: normal;
    color: #B0B0B0;
    margin-left: 14px;
  }

  /* https://proto.io/freebies/onoff/ */
  .onoffswitch {
    position: relative;
    top: 5px;
    width: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    display: inline-block;
    margin-left: 28px;
  }

  .onoffswitch-checkbox {
    display: none;
  }

  .onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 20px;
    padding: 0;
    line-height: 20px;
    border: 2px solid #FFFFFF;
    border-radius: 20px;
    background-color: #9E9E9E;
    transition: background-color 0.3s ease-in;
  }

  .onoffswitch-label:before {
    content: "";
    display: block;
    width: 20px;
    margin: 0px;
    background: #FFFFFF;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 18px;
    border: 2px solid #FFFFFF;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }

  .onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: #1667E0;
  }

  .onoffswitch-checkbox:checked + .onoffswitch-label, .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    border-color: #1667E0;
  }

  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    right: 0px;
  }
</style>
