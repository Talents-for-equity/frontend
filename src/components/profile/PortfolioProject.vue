<template>
  <div>
    <h4 class="title">{{project.title}}</h4>
    <Rating class="rating" :rating="project.rating"></Rating>
    <div class="description">{{project.description}}</div>
    <div class="border"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Rating from '@/components/Rating.vue'
import { Project } from '@/store/modules/user/user'

@Component({
  components: {
    Rating
  }
})
export default class PortfolioProject extends Vue {
  @Prop() project!: Project
}
</script>

<style scoped>
  .title {
    font-size: 20px;
    color: #404040;
  }

  .description {
    margin-top: 8px;
    font-size: 16px;
    color: #404040;
  }

  .border {
    border: 1px solid #EBEBEB;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .rating {
    margin-top: 11px;
  }
</style>
