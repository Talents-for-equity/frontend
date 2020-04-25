<template>
   <div>
      Filter 123
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SelectOption } from '@/store/modules/users'

@Component
export default class Filters extends Vue {
  // @Prop() options!: SelectOption[]

  // selectedOptions = this.options
}
</script>

<style lang="scss">

</style>
