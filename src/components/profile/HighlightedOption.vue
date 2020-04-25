<template>
  <div cass="highlightedOption">
    <h4>{{highlightTitle}}</h4>
    <div v-for="projectType in getNames" :key="projectType.key"
         v-bind:class="{ highlight: projectType.highlight }">
      {{projectType.name}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface Options {
  key: number;
  name: string;
}

@Component
export default class HighlightOption extends Vue {
  @Prop({ default: 'title' }) highlightTitle!: string
  @Prop() optionNames!: {[key: number]: string}
  @Prop() highlightKeys!: number[]

  get getNames (): { key: number; name: string; highlight: boolean }[] {
    return Object.keys(this.optionNames).map(key => {
      const numberKey = parseInt(key)
      return {
        key: numberKey,
        name: this.optionNames[numberKey],
        highlight: this.highlightKeys.indexOf(numberKey) !== -1
      }
    })
  }
}
</script>

<style scoped>
  .highlight {
    color: blue;
  }
</style>
