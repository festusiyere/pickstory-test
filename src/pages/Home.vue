<template>
  <div class="home">
    <Carousel />
    <ListingComponent />
  </div>
</template>

<script>
import Carousel from '@/components/CarouselComponent.vue'
import ListingComponent from '@/components/ListingComponent.vue'
export default {
  components: {
    Carousel,
    ListingComponent
  },
  mounted() {
    // Get all images
    this.$store.dispatch('images/fetchImages')
  }
}
</script>

<style></style>
