<template>
  <div class="mapView">
    <div class="introduction">
      <h3>Our team wanted to say thank you with <span class="heart">❤</span>️
        to all supporters, creators and attendees of this hackathon.
        We created this map and our solution for all of you to show your impact on Europe
        and to stay connected with all talents afterwards.</h3>
      <div class="signup"><button @click="signUp">Sign Up</button></div>
    </div>
    <div class="map">
      <LeafletMap/>
    </div>
    <footer>
      <a href="https://devpost.com/software/talents-for-equity-w5hnuc" target="_blank"><img src="@/assets/Banner.jpg"
                                                                                            alt="" srcset=""></a>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LeafletMap from '@/components/LeafletMap.vue'
import router from '@/router/index'

@Component({
  components: {
    LeafletMap
  }
})
export default class MapView extends Vue {
  async signUp () {
    await router.push('/preregistration')
  }
}
</script>

<style lang="scss">
  .mapView {
    margin: 2rem auto;
    /*min-height: 900px;*/
    max-width: 900px;
    position: relative;

    .map {
      padding: 2rem 4.5rem;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
      border-radius: 1rem;
    }
  }

  .introduction {
    padding: 1em;
  }

  .heart {
    color: red;
  }

  footer {
    text-align: center;
    font-weight: bold;
    /*position: absolute;*/
    bottom: 0;
    max-width: 100%;

    p {
      padding: 1rem 0;
    }

    img {
      width: 100%;
    }
  }

  .signup {
    margin-top: 1em;
    text-align: center;
  }
</style>
