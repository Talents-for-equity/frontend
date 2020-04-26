<template>
  <div style="height: 350px;">
    <l-map style="height: 350px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" v-on:click="markerClicked('fadf')"></l-marker>
    </l-map>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker
  }
})
export default class LeafletMap extends Vue {
  url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  zoom = 3;
  center = [47.41322, -1.219482];
  bounds: number[] = [];
  markerLatLng = [47.31322, -1.319482];

  zoomUpdated (zoom: number) {
    this.zoom = zoom
  }

  centerUpdated (center: number[]) {
    this.center = center
  }

  boundsUpdated (bounds: number[]) {
    this.bounds = bounds
  }

  markerClicked (data: any) {
    console.log('marker clicked', data)
  }
}
</script>

<style></style>
