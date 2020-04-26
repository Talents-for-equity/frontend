<template>
  <div class="mapView">
    <div class="map">
      <LeafletMap/>
      </div>
      <footer>
        <p>Our Team wanted to say thank you with :hearts: to all Supporter, Creator and Attendees of this Hackathon.</p>
        <a href="https://devpost.com/software/talents-for-equity-w5hnuc" target="_blank"><img src="@/assets/Banner.jpg" alt="" srcset=""></a>
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
  margin: 2rem auto;
  min-height: 1100px;
  max-width: 900px;
  position:relative;
  .map{
    padding: 7rem 4.5rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
  }
}

footer{
  text-align: center;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  max-width: 100%;
  p{
    padding: 1rem 0;
  }
  img{
    width: 100%;
  }
}
</style>
