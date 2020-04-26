<template>
  <div class="leafLetMap">
    <h2 class="header">Take a look at how many people joined the hackathon</h2>
    <l-map style="height: 350px" :zoom="zoom" :center="center">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-for="data in markers" v-bind:key="data.key"
                  :lat-lng="data.latLang" v-on:click="markerClicked(data.people)"></l-marker>
      </l-map>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>
        People who signed up, you can
        <router-link to="/preregistration">Signup Here</router-link>
      </md-dialog-title>
      <table>
        <tr>
          <th></th>
          <th>Profession</th>
          <th>Is talent</th>
          <th>Seeking talent</th>
        </tr>
        <tr v-for="person in people" v-bind:key="person.id">
          <td><img :src="person.avatar"></td>
          <td>{{person.profession}}</td>
          <td><input type="checkbox" disabled :checked="person.talent"></td>
          <td><input type="checkbox" disabled :checked="person.seeker"></td>
        </tr>
      </table>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import Axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

delete (L.Icon.Default as any).prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

interface People {
  id: string;
  avatar: string;
  profession: string;
  talent: boolean;
  seeker: boolean;
  newsletter: boolean;
}

interface MarkerResult {
  key: string;
  latLang: number[];
  people: People[];
}

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker
  }
})
export default class LeafletMap extends Vue {
  url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  zoom = 3
  center = [47.41322, -1.219482]
  bounds: number[] = []
  markerLatLng = [48.1719894, 11.603123292400097]
  markers: MarkerResult[] = []
  showMap = true
  people: People[] = []

  showDialog = false

  constructor () {
    super()
    this.getMarker()
  }

  zoomUpdated (zoom: number) {
    this.zoom = zoom
  }

  centerUpdated (center: number[]) {
    this.center = center
  }

  boundsUpdated (bounds: number[]) {
    this.bounds = bounds
  }

  markerClicked (data: People[]) {
    console.log('marker clicked', data)
    this.showMap = false
    this.people = data
    this.showDialog = true
  }

  async getMarker () {
    const result = await Axios.get('https://tfe-reg.pandemy.xyz/mapping')
    const markerObjects: { [key: string]: MarkerResult } = {}
    result.data.forEach((values: any) => {
      const key = values.lat + ';' + values.lon
      let markerResult = markerObjects[key]
      if (!markerResult) {
        markerResult = {
          key,
          latLang: [parseFloat(values.lat), parseFloat(values.lon)],
          people: []
        }
        markerObjects[key] = markerResult
      }
      markerResult.people.push({
        id: uuidv4(),
        avatar: values.avatar,
        profession: values.profession,
        talent: values.talent === 'true',
        seeker: values.seeker === 'true',
        newsletter: values.newsletter === 'true'
      })
    })
    this.markers = Object.values(markerObjects)
  }

  backToMap () {
    this.showMap = true
  }
}
</script>

<style lang="scss">
  .leafLetMap {
    text-align: center;

    h1 {
      font-weight: bolder;
      max-width: 450px;
      margin: 0rem auto 2rem;
    }
  }

  th, td {
    padding-right: 1em;
  }

  .header {
    margin-bottom: 1em;
  }
</style>
