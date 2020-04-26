<template>
  <div>
    <div class="map">
      <LeafletMap/>
      </div>
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
.map{
  padding: 2rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
}
</style>
