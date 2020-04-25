<template>
   <div>
    <h2>Are you a</h2>
    <button>Seeker</button>
    <button>Talent</button>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IsSeekerTalent extends Vue {
}
</script>

<style lang="scss" scoped>
div{
    display: block;
    button{
        margin: 1rem 0 ;
        display: block;
    }
}
</style>
