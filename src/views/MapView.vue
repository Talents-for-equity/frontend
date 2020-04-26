<template>
  <div class="mapView">
    <div class="introduction">
      <h2>Take a look at how many people joined the hackathon</h2>
      <h3>Our team wanted to say thank you with <span class="heart">❤</span>️
        to all supporters, creators and attendees of this hackathon.</h3>
      <h3 class="thankYou">Say thank you to us and pay us with a "like" here:
        <a href="https://devpost.com/software/talents-for-equity-w5hnuc" target="_blank"
           rel="noopener noreferrer">Link</a></h3>
      <h3>To be a part of it, go to the sign up
        <button @click="signUp">Sign Up</button>
      </h3>
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

  .thankYou {

    a {
      color: red;
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
</style>
