<template>
  <div class="listing">
    <ul>
      <li v-for="url in selectedImages" :key="url.id">Selected URL {{ url.download_url }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    selectedImages() {
      return this.$store.getters['list/get']
    }
  }
}
</script>

<style></style>
