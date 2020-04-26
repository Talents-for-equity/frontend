<template>
  <div>
    <LeafletMap/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LeafletMap from '@/components/LeafletMap.vue'
@Component({
  components: {
    LeafletMap
  }
})
export default class MapView extends Vue {

}
</script>

<style>

</style>
