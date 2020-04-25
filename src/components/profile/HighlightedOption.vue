<template>
  <div cass="highlightedOption">
    <h4>{{highlightTitle}} <button v-if="!edit" v-on:click="editOptions">Edit</button></h4>
    <div class="view" v-if="!edit">
      <div v-for="type in getNames" :key="type.key"
           v-bind:class="{ highlight: type.highlight }">
        {{type.name}}
      </div>
    </div>
    <div class="edit" v-if="edit">
      <div class="buttons">
        <div v-for="type in getNames" :key="type.key">
          <input type="checkbox" :value="type.key" v-model="editKeys">{{type.name}}
        </div>
        <button v-on:click="dismiss">Dismiss</button> <button v-on:click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

export interface Options {
  key: number;
  name: string;
}

@Component
export default class HighlightOption extends Vue {
  @Prop({ default: 'title' }) highlightTitle!: string
  @Prop() optionNames!: {[key: number]: string}
  @Prop() highlightKeys!: number[]

  activeOptions = this.highlightKeys
  editKeys = this.activeOptions

  edit = false

  get getNames (): { key: number; name: string; highlight: boolean }[] {
    return Object.keys(this.optionNames).map(key => {
      const numberKey = parseInt(key)
      return {
        key: numberKey,
        name: this.optionNames[numberKey],
        highlight: this.activeOptions.indexOf(numberKey) !== -1
      }
    })
  }

  editOptions () {
    this.edit = true
    this.editKeys = this.activeOptions
  }

  dismiss () {
    this.edit = false
  }

  @Emit()
  save () {
    this.activeOptions = this.editKeys
    this.edit = false
    return this.activeOptions
  }
}
</script>

<style scoped>
  .highlight {
    color: blue;
  }
</style>
