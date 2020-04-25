<template>
  <div cass="highlightedOption">
    <h4>{{highlightTitle}} <button v-if="showEditButton" v-on:click="editOptions">Edit</button></h4>
    <div class="view" v-if="!edit">
      <div v-for="type in options" :key="type.key"
           v-bind:class="{ highlight: type.selected }">
        {{type.name}}
      </div>
    </div>
    <div class="edit" v-if="edit">
      <div class="buttons">
        <div v-for="type in options" :key="type.key">
          <input type="checkbox" :value="type.key" v-model="editKeys">{{type.name}}
        </div>
        <button v-on:click="dismiss">Dismiss</button> <button v-on:click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { SelectOption } from '@/store/modules/users'

@Component
export default class HighlightOption extends Vue {
  @Prop({ default: 'title' }) highlightTitle!: string
  @Prop() options!: SelectOption[]
  @Prop() highlightKeys!: number[]
  @Prop({ default: false }) readOnly!: boolean

  activeOptions!: SelectOption[]
  editKeys: number[] = []

  edit = false

  constructor () {
    super()
    this.activeOptions = this.options.slice()
    this.setSelectedOptions(this.activeOptions, this.highlightKeys)
  }

  get showEditButton () {
    return !this.edit && !this.readOnly
  }

  editOptions () {
    this.editKeys = this.optionToSelectedKeys()
    this.edit = true
  }

  private optionToSelectedKeys () {
    const keys: number[] = []
    this.activeOptions.forEach(option => {
      if (option.selected) {
        keys.push(option.key)
      }
    })
    return keys
  }

  dismiss () {
    this.edit = false
  }

  @Emit()
  save () {
    this.setSelectedOptions(this.activeOptions, this.editKeys)
    this.edit = false
    return this.editKeys
  }

  private setSelectedOptions (activeOptions: SelectOption[],
    highlightKeys: number[]) {
    activeOptions.forEach(option => {
      option.selected = false
    })
    highlightKeys.forEach(key => {
      activeOptions[key].selected = true
    })
  }
}
</script>

<style scoped>
  .highlight {
    color: blue;
  }
</style>
