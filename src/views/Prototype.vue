<template>
  <div>
    <PrototypeLinks></PrototypeLinks>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PrototypeLinks from '@/components/PrototypeLinks.vue'

@Component({
  components: {
    PrototypeLinks,
    ProfileLinks: PrototypeLinks
  }
})
export default class Prototype extends Vue {
}
</script>
