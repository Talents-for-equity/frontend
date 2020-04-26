<template>
  <div id="app">
    <NavBar/>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator'
import NavBar from '@/components/NavBar.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

@Component({
  components: {
    NavBar
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss">
$normal:'Montserrat', sans-serif;
$primary: #E94E1B;

*{
  margin: 0;
  padding: 0;
}
#app {
  font-family:$normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-weight: 500;
  color: #2c3e50;
    button, .blue-button {
    background: $primary;
    border-radius: 7px;
    border: none;
    width: 235px;
    height: 40px;
    text-transform: uppercase;
    font-family:$normal;
    font-weight: bolder;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
}

.md-dialog {
  z-index: 999;
}
</style>
