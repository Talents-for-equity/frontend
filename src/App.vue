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

@Component({
  components: {
    NavBar
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
    .view{
      padding: 5rem;
    }
    button, .blue-button {
    background: #1667E0;
    border-radius: 7px;
    border: none;
    width: 235px;
    height: 40px;
    color: white;
  }
}
</style>
