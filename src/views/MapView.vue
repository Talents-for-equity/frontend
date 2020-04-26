<template>
  <div class="mapView">
    <div class="map">
      <LeafletMap/>
      </div>
      <footer>
        <p>Our Team wanted to say thank you with :hearts: to all Supporter, Creator and Attendees of this Hackathon.</p>
        <img src="@/assets/Banner.jpg" alt="" srcset="">
        <p>Say thank you to us and pay us with a "like" here: <a href="https://devpost.com/software/talents-for-equity-w5hnuc" target="_blank" rel="noopener noreferrer">Link</a></p>
      </footer>
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

<style lang="scss">
.mapView{
  width: 100%;
  margin: 0;
  padding: 0;
  .map{
    padding: 2rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
  }
}

footer{
  text-align: center;
  font-weight: bold;
  p{
    padding: 2rem 0;
  }
  img{
    width: 100%;
  }
}
</style>
