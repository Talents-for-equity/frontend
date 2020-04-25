<template>
  <div class="rating">
    <span v-if="showRatingLabel" class="ratingLabel">Rating:</span>
    <img v-for="n in numberOfFullStars" :key="n"
         src="@/assets/ratingStar.svg" class="fullStar">
    <img src="@/assets/halfRatingStar.svg" v-if="hasHalfStar"
         class="halfStar">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Rating extends Vue {
  @Prop() rating!: number
  @Prop({ default: false }) showRatingLabel!: boolean

  get numberOfFullStars () {
    return new Array(parseInt(this.rating + ''))
  }

  get hasHalfStar () {
    return (this.rating - this.numberOfFullStars.length) > 0
  }
}
</script>

<style scoped>
  .ratingLabel {
    margin-right: 5px;
  }

  .rating {
    color: #1667E0;
    margin-top: 8px;
  }

  img {
    position: relative;
    top: 3px;
    margin-right: 4px;
  }

  .fullStar {
    width: 17px;
    height: 17px;
  }

  .halfStar {
    height: 17px;
  }
</style>
