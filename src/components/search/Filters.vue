<template>
   <div>
      <h4>{{title}}</h4>
     <div v-for="option in options" :key="option.key">
       <input type="checkbox" :value="option.key" v-model="selectedOptions"
       @change="optionSelected">{{option.name}}
     </div>
      <input class="blue-button" type="button" value="Apply">
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { SelectOption } from '@/store/modules/user/user'

@Component
export default class Filters extends Vue {
  @Prop() title!: string
  @Prop() options!: SelectOption[]

  selectedOptions = []

  @Emit('optionSelected')
  optionSelected () {
    return this.selectedOptions
  }
}
</script>

<style scoped lang="scss">

</style>
